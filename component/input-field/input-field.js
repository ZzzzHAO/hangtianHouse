// component/input-field/input-field.js
Component({
    externalClasses: ['custom-class'],
    /**
     * 组件的属性列表
     */
    properties: {
    error: Boolean,
    focus: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    password: Boolean,
    clearable: Boolean,
    placeholder: String,
    value: String,
    confirmType: String,
    confirmHold: Boolean,
    placeholderStyle: String,
    selectionEnd: {
        type: Number,
        value: -1
    },
    selectionStart: {
        type: Number,
        value: -1
    },
    adjustPosition: {
        type: Boolean,
        value: true
    },
    cursorSpacing: {
        type: Number,
        value: 50
    },
    maxlength: {
        type: Number,
        value: -1
    },
    type: {
        type: String,
        value: 'text'
    },
    },

  /**
   * 组件的初始数据
   */
  data: {
    focused: false,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onInput(event) {
        const { value = '' } = event.detail || {};
        this.setData({ value }, () => {
            this.emitChange(value);
        });
    },
    onFocus(event) {
        this.setData({ focused: true });
        this.triggerEvent('focus',event.detail);
    },
    onBlur(event) {
        this.setData({ focused: false });
        this.triggerEvent('blur',event.detail);
    },
    onClear() {
        this.setData({ value: '' }, () => {
            this.emitChange('');
            this.triggerEvent('clear', '');
        });
    },
    onConfirm() {
        this.triggerEvent('confirm',this.data.value);
    },
    emitChange(value) {
        this.triggerEvent('input', value);
        this.triggerEvent('change', value);
    }
  }
})
