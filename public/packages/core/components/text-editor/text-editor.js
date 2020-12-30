(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var o=e.$,n=e.utils,r=e.getDevice,a=(e.getSupport,e.Class),i=(e.Modal,e.ConstructorMethods),l=(e.ModalMethods,n.extend),c=n.deleteProps;function s(e){this.wrapped=e}function d(e){var t,o;function n(t,o){try{var a=e[t](o),i=a.value,l=i instanceof s;Promise.resolve(l?i.wrapped:i).then((function(e){l?n("return"===t?"return":"next",e):r(a.done?"return":"normal",e)}),(function(e){n("throw",e)}))}catch(e){r("throw",e)}}function r(e,r){switch(e){case"return":t.resolve({value:r,done:!0});break;case"throw":t.reject(r);break;default:t.resolve({value:r,done:!1})}(t=t.next)?n(t.key,t.arg):o=null}this._invoke=function(e,r){return new Promise((function(a,i){var l={key:e,arg:r,resolve:a,reject:i,next:null};o?o=o.next=l:(t=o=l,n(e,r))}))},"function"!=typeof e.return&&(this.return=void 0)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"function"==typeof Symbol&&Symbol.asyncIterator&&(d.prototype[Symbol.asyncIterator]=function(){return this}),d.prototype.next=function(e){return this._invoke("next",e)},d.prototype.throw=function(e){return this._invoke("throw",e)},d.prototype.return=function(e){return this._invoke("return",e)};var p={bold:["bold","format_bold","bold"],italic:["italic","format_italic","italic"],underline:["underline","format_underlined","underline"],strikeThrough:["strikethrough","strikethrough_s","strikeThrough"],orderedList:["list_number","format_list_numbered","insertOrderedList"],unorderedList:["list_bullet","format_list_bulleted","insertUnorderedList"],link:["link","link","createLink"],image:["photo","image","insertImage"],paragraph:["paragraph",'<i class="icon">¶</i>',"formatBlock.P"],h1:['<i class="icon">H<sub>1</sub></i>','<i class="icon">H<sub>1</sub></i>',"formatBlock.H1"],h2:['<i class="icon">H<sub>2</sub></i>','<i class="icon">H<sub>2</sub></i>',"formatBlock.H2"],h3:['<i class="icon">H<sub>3</sub></i>','<i class="icon">H<sub>3</sub></i>',"formatBlock.H3"],alignLeft:["text_alignleft","format_align_left","justifyLeft"],alignCenter:["text_aligncenter","format_align_center","justifyCenter"],alignRight:["text_alignright","format_align_right","justifyRight"],alignJustify:["text_justify","format_align_justify","justifyFull"],subscript:["textformat_subscript",'<i class="icon">A<sub>1</sub></i>',"subscript"],superscript:["textformat_superscript",'<i class="icon">A<sup>1</sup></i>',"superscript"],indent:["increase_indent","format_indent_increase","indent"],outdent:["decrease_indent","format_indent_decrease","outdent"]},m=function(e){var t,n;function a(t,n){var a,i=u(a=e.call(this,n,[t])||this),c=r(),s=l({},t.params.textEditor);i.useModulesParams(s),i.params=l(s,n);var d=i.params.el;if(!d)return i||u(a);var p=o(d);if(0===p.length)return i||u(a);if(p[0].f7TextEditor)return p[0].f7TextEditor||u(a);var m=p.children(".text-editor-content");if(m.length||(p.append('<div class="text-editor-content" contenteditable></div>'),m=p.children(".text-editor-content")),l(i,{app:t,$el:p,el:p[0],$contentEl:m,contentEl:m[0]}),"value"in n&&(i.value=i.params.value),"keyboard-toolbar"===i.params.mode&&(c.cordova||c.capacitor||c.android||(i.params.mode="popover")),"string"==typeof i.params.buttons)try{i.params.buttons=JSON.parse(i.params.buttons)}catch(e){throw new Error('Framework7: TextEditor: wrong "buttons" parameter format')}return p[0].f7TextEditor=i,i.onButtonClick=i.onButtonClick.bind(i),i.onFocus=i.onFocus.bind(i),i.onBlur=i.onBlur.bind(i),i.onInput=i.onInput.bind(i),i.onPaste=i.onPaste.bind(i),i.onSelectionChange=i.onSelectionChange.bind(i),i.closeKeyboardToolbar=i.closeKeyboardToolbar.bind(i),i.attachEvents=function(){"toolbar"===i.params.mode&&i.$el.find(".text-editor-toolbar").on("click","button",i.onButtonClick),"keyboard-toolbar"===i.params.mode&&(i.$keyboardToolbarEl.on("click","button",i.onButtonClick),i.$el.parents(".page").on("page:beforeout",i.closeKeyboardToolbar)),"popover"===i.params.mode&&i.popover&&i.popover.$el.on("click","button",i.onButtonClick),i.$contentEl.on("paste",i.onPaste),i.$contentEl.on("focus",i.onFocus),i.$contentEl.on("blur",i.onBlur),i.$contentEl.on("input",i.onInput,!0),o(document).on("selectionchange",i.onSelectionChange)},i.detachEvents=function(){"toolbar"===i.params.mode&&i.$el.find(".text-editor-toolbar").off("click","button",i.onButtonClick),"keyboard-toolbar"===i.params.mode&&(i.$keyboardToolbarEl.off("click","button",i.onButtonClick),i.$el.parents(".page").off("page:beforeout",i.closeKeyboardToolbar)),"popover"===i.params.mode&&i.popover&&i.popover.$el.off("click","button",i.onButtonClick),i.$contentEl.off("paste",i.onPaste),i.$contentEl.off("focus",i.onFocus),i.$contentEl.off("blur",i.onBlur),i.$contentEl.off("input",i.onInput,!0),o(document).off("selectionchange",i.onSelectionChange)},i.useModules(),i.init(),i||u(a)}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.setValue=function(e){var t=this;return t.value===e||(t.value=e,t.$contentEl.html(e),t.$el.trigger("texteditor:change",t.value),t.emit("local::change textEditorChange",t,t.value)),t},i.getValue=function(){return this.value},i.createLink=function(){var e,t=this,n=window.getSelection(),r=[];if(n&&n.anchorNode&&o(n.anchorNode).parents(t.$el).length){for(var a=n.anchorNode;a;)r.push(a),a.nextSibling&&a!==n.focusNode||(a=null),a&&(a=a.nextSibling);e=o(r).closest("a").add(o(r).children("a"))}if(e&&e.length)return e.each((function(e){var t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),document.execCommand("unlink",!1),t.removeAllRanges()})),t;var i=t.getSelectionRange();return i?(t.app.dialog.prompt(t.params.linkUrlText,"",(function(e){e&&e.trim().length&&(t.setSelectionRange(i),document.execCommand("createLink",!1,e.trim()))})).$el.find("input").focus(),t):t},i.insertImage=function(){var e=this,t=e.getSelectionRange();return t?(e.app.dialog.prompt(e.params.imageUrlText,"",(function(o){o&&o.trim().length&&(e.setSelectionRange(t),document.execCommand("insertImage",!1,o.trim()))})).$el.find("input").focus(),e):e},i.removePlaceholder=function(){this.$contentEl.find(".text-editor-placeholder").remove()},i.insertPlaceholder=function(){this.$contentEl.append('<div class="text-editor-placeholder">'+this.params.placeholder+"</div>")},i.onSelectionChange=function(){var e=this;if("toolbar"!==e.params.mode){var t=window.getSelection(),n=o(t.anchorNode).parents(e.contentEl).length||t.anchorNode===e.contentEl;if("keyboard-toolbar"!==e.params.mode){if("popover"===e.params.mode){var r=o(t.anchorNode).parents(e.popover.el).length||t.anchorNode===e.popover.el;if(!n&&!r)return void e.closePopover();if(!t.isCollapsed&&t.rangeCount){var a=t.getRangeAt(0).getBoundingClientRect(),i=e.app.$el[0]||document.body;e.openPopover(a.x+(window.scrollX||0)-i.offsetLeft,a.y+(window.scrollY||0)-i.offsetTop,a.width,a.height)}else t.isCollapsed&&e.closePopover()}}else n?e.openKeyboardToolbar():e.closeKeyboardToolbar()}},i.onPaste=function(e){if(this.params.clearFormattingOnPaste&&e.clipboardData&&e.clipboardData.getData){var t=e.clipboardData.getData("text/plain");e.preventDefault(),document.execCommand("insertText",!1,t)}},i.onInput=function(){var e=this,t=e.$contentEl.html();e.value=t,e.$el.trigger("texteditor:input"),e.emit("local:input textEditorInput",e,e.value),e.$el.trigger("texteditor:change",e.value),e.emit("local::change textEditorChange",e,e.value)},i.onFocus=function(){var e=this;e.removePlaceholder(),e.$contentEl.focus(),e.$el.trigger("texteditor:focus"),e.emit("local::focus textEditorFocus",e)},i.onBlur=function(){var e=this;if(e.params.placeholder&&""===e.$contentEl.html()&&e.insertPlaceholder(),"popover"===e.params.mode){var t=window.getSelection(),n=o(t.anchorNode).parents(e.contentEl).length||t.anchorNode===e.contentEl;document.activeElement&&e.popover&&o(document.activeElement).closest(e.popover.$el).length||n||e.closePopover()}if("keyboard-toolbar"===e.params.mode){var r=window.getSelection();o(r.anchorNode).parents(e.contentEl).length||r.anchorNode===e.contentEl||e.closeKeyboardToolbar()}e.$el.trigger("texteditor:blur"),e.emit("local::blur textEditorBlur",e)},i.onButtonClick=function(e){var t=this,n=window.getSelection();if(o(n.anchorNode).parents(t.contentEl).length||n.anchorNode===t.contentEl){var r=o(e.target).closest("button");r.parents("form").length&&e.preventDefault();var a=r.attr("data-button"),i=t.params.customButtons&&t.params.customButtons[a];if(a&&(p[a]||i))if(r.trigger("texteditor:buttonclick",a),t.emit("local::buttonClick textEditorButtonClick",t,a),i)i.onClick&&i.onClick(t,r[0]);else{var l=p[a][2];if("createLink"!==l)if("insertImage"!==l)if(0!==l.indexOf("formatBlock"))document.execCommand(l,!1);else{var c=l.split(".")[1],s=o(n.anchorNode);s.parents(c.toLowerCase()).length||s.is(c)?document.execCommand("formatBlock",!1,"div"):document.execCommand("formatBlock",!1,c)}else t.insertImage();else t.createLink()}}},i.getSelectionRange=function(){if(window.getSelection){var e=window.getSelection();if(e.getRangeAt&&e.rangeCount)return e.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},i.setSelectionRange=function(e){if(e)if(window.getSelection){var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}else document.selection&&e.select&&e.select()},i.renderButtons=function(){var e=this,t="";function o(t){var o="md"===e.app.theme?"material-icons":"f7-icons";if(e.params.customButtons&&e.params.customButtons[t])return'<button type="button" class="text-editor-button" data-button="'+t+'">'+(e.params.customButtons[t].content||"")+"</button>";if(!p[t])return"";var n=p[t]["md"===e.app.theme?1:0];return('<button type="button" class="text-editor-button" data-button="'+t+'">'+(n.indexOf("<")>=0?n:'<i class="'+o+'">'+n+"</i>")+"</button>").trim()}return e.params.buttons.forEach((function(n,r){Array.isArray(n)?(n.forEach((function(e){t+=o(e)})),r<e.params.buttons.length-1&&e.params.dividers&&(t+='<div class="text-editor-button-divider"></div>')):t+=o(n)})),t},i.createToolbar=function(){this.$el.prepend('<div class="text-editor-toolbar">'+this.renderButtons()+"</div>")},i.createKeyboardToolbar=function(){var e=this,t=r(),n=e.$el.closest(".theme-dark").length>0||"dark"===t.prefersColorScheme();e.$keyboardToolbarEl=o('<div class="toolbar toolbar-bottom text-editor-keyboard-toolbar '+(n?"theme-dark":"")+'"><div class="toolbar-inner">'+e.renderButtons()+"</div></div>")},i.createPopover=function(){var e=this,t=e.$el.closest(".theme-dark").length>0;e.popover=e.app.popover.create({content:'\n        <div class="popover '+(t?"theme-light":"theme-dark")+' text-editor-popover">\n          <div class="popover-inner">'+e.renderButtons()+"</div>\n        </div>\n      ",closeByOutsideClick:!1,backdrop:!1})},i.openKeyboardToolbar=function(){var e=this;e.$keyboardToolbarEl.parent(e.app.$el).length||(e.$el.trigger("texteditor:keyboardopen"),e.emit("local::keyboardOpen textEditorKeyboardOpen",e),e.app.$el.append(e.$keyboardToolbarEl))},i.closeKeyboardToolbar=function(){var e=this;e.$keyboardToolbarEl.remove(),e.$el.trigger("texteditor:keyboardclose"),e.emit("local::keyboardClose textEditorKeyboardClose",e)},i.openPopover=function(e,t,o,n){var r=this;r.popover&&(Object.assign(r.popover.params,{targetX:e,targetY:t,targetWidth:o,targetHeight:n}),clearTimeout(r.popoverTimeout),r.popoverTimeout=setTimeout((function(){r.popover&&(r.popover.opened?r.popover.resize():(r.$el.trigger("texteditor:popoveropen"),r.emit("local::popoverOpen textEditorPopoverOpen",r),r.popover.open()))}),400))},i.closePopover=function(){var e=this;clearTimeout(e.popoverTimeout),e.popover&&e.popover.opened&&(e.popoverTimeout=setTimeout((function(){e.popover&&(e.$el.trigger("texteditor:popoverclose"),e.emit("local::popoverClose textEditorPopoverClose",e),e.popover.close())}),400))},i.init=function(){var e=this;return e.value?e.$contentEl.html(e.value):e.value=e.$contentEl.html(),e.params.placeholder&&""===e.value&&e.insertPlaceholder(),"toolbar"===e.params.mode?e.createToolbar():"popover"===e.params.mode?e.createPopover():"keyboard-toolbar"===e.params.mode&&e.createKeyboardToolbar(),e.attachEvents(),e.$el.trigger("texteditor:init"),e.emit("local::init textEditorInit",e),e},i.destroy=function(){var e=this;e.$el.trigger("texteditor:beforedestroy"),e.emit("local::beforeDestroy textEditorBeforeDestroy",e),e.detachEvents(),"keyboard-toolbar"===e.params.mode&&e.$keyboardToolbarEl&&e.$keyboardToolbarEl.remove(),e.popover&&(e.popover.close(!1),e.popover.destroy()),delete e.$el[0].f7TextEditor,c(e),e=null},a}(a),f={name:"textEditor",params:{textEditor:{el:null,mode:"toolbar",value:void 0,customButtons:null,buttons:[["bold","italic","underline","strikeThrough"],["orderedList","unorderedList"],["link","image"],["paragraph","h1","h2","h3"],["alignLeft","alignCenter","alignRight","alignJustify"],["subscript","superscript"],["indent","outdent"]],dividers:!0,imageUrlText:"Insert image URL",linkUrlText:"Insert link URL",placeholder:null,clearFormattingOnPaste:!0}},create:function(){this.textEditor=l(i({defaultSelector:".text-editor",constructor:m,app:this,domProp:"f7TextEditor"}))},static:{TextEditor:m},on:{tabMounted:function(e){var t=this;o(e).find(".text-editor-init").each((function(e){var n=o(e).dataset();t.textEditor.create(l({el:e},n||{}))}))},tabBeforeRemove:function(e){o(e).find(".text-editor-init").each((function(e){e.f7TextEditor&&e.f7TextEditor.destroy()}))},pageInit:function(e){var t=this;e.$el.find(".text-editor-init").each((function(e){var n=o(e).dataset();t.textEditor.create(l({el:e},n||{}))}))},pageBeforeRemove:function(e){e.$el.find(".text-editor-init").each((function(e){e.f7TextEditor&&e.f7TextEditor.destroy()}))}},vnode:{"text-editor-init":{insert:function(e){var t=e.elm,n=o(t).dataset();this.textEditor.create(l({el:t},n||{}))},destroy:function(e){var t=e.elm;t.f7TextEditor&&t.f7TextEditor.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[f.name])return;e.use(f),e.instance&&(e.instance.useModuleParams(f,e.instance.params),e.instance.useModule(f))}return f}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
