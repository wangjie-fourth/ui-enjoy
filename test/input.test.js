const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        let Constructor = null;
        let vm = null;
        beforeEach(() => {
            Constructor = Vue.extend(Input)
        })
        afterEach(() => {
            vm.$destroy()
        })

        it('接收 value', () => {
            vm = new Constructor({
                propsData:{
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接收 disabled', function () {
            vm = new Constructor({
                propsData:{
                    disabled: true
                }
            }).$mount()

            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', function () {
            vm = new Constructor({
                propsData:{
                    readonly: true
                }
            }).$mount()

            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('接收 error', function () {
            vm = new Constructor({
                propsData:{
                    error: '你错了'
                }
            }).$mount()

            const inputElement = vm.$el.querySelector('use')
            expect(inputElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('你错了')
        })
    })

    describe('event', () => {
        let Constructor = null;
        let vm = null;
        beforeEach(() => {
            Constructor = Vue.extend(Input)
        })
        afterEach(() => {
            vm.$destroy()
        })

        it('支持 change 事件', function () {
            vm = new Constructor({}).$mount()

            const callback = sinon.fake()
            vm.$on('change', callback)
            // 如何触发change事件？如何自定义事件？
            let event = new Event('change');
            Object.defineProperty(event, 'target', { value: {value: 'hi'}, enumerable: true})
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
        })
    })


})