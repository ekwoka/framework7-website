class Toggle extends HTMLElement{constructor(){super();const r=this.attachShadow({mode:"open"});r.innerHTML='<div class="f7-motion f7-motion-toggle"><div class="f7-el-page"><div class="f7-el-view"><div class="f7-el-view-item"><div class="f7-el-view-item-content"><div class="f7-el-view-item-title"></div></div><div class="f7-el-toggle"><div class="f7-el-toggle-box"></div><div class="f7-el-toggle-check"></div></div></div><div class="f7-el-view-item"><div class="f7-el-view-item-content"><div class="f7-el-view-item-title"></div></div><div class="f7-el-toggle"><div class="f7-el-toggle-box"></div><div class="f7-el-toggle-check"></div></div></div><div class="f7-el-view-item"><div class="f7-el-view-item-content"><div class="f7-el-view-item-title"></div></div><div class="f7-el-toggle"><div class="f7-el-toggle-box"></div><div class="f7-el-toggle-check"></div></div></div></div></div></div></div>';const o=document.createElement("style");o.textContent="*{box-sizing:border-box;font-family:-apple-system,system-ui,Helvetica Neue,Helvetica,Arial,sans-serif}:host{--color-primary-shade:#ff927b;--color-primary-tint:#ffd6cd;--color-primary-rgb:255,180,164;--color-primary:#ffb4a4;--color-on-primary:#640d00;--color-primary-container:#8d1600;--color-on-primary-container:#ffdad3;--color-secondary:#e7bdb4;--color-on-secondary:#442a24;--color-secondary-container:#5d3f39;--color-on-secondary-container:#ffdad3;--color-surface:#201a19;--color-on-surface:#ede0dd;--color-surface-variant:#534340;--color-on-surface-variant:#d8c2bd;--color-outline:#a08c88;--color-outline-variant:#534340;--color-inverse-surface:#ede0dd;--color-inverse-on-surface:#362f2d;--color-inverse-primary:#b82000;--color-surface-1:#2b2220;--color-surface-2:#322624;--color-surface-3:#392b28;--color-surface-4:#3b2c2a;--color-surface-5:#3f302c;--color-surface-variant-rgb:83,67,64;--color-on-surface-variant-rgb:216,194,189;--color-surface-1-rgb:43,34,32;--color-surface-2-rgb:50,38,36;--color-surface-3-rgb:57,43,40;--color-surface-4-rgb:59,44,42;--color-surface-5-rgb:63,48,44}.f7-motion{padding:0 24px;height:240px;position:relative;overflow:hidden;perspective:1200px;transform-style:preserve-3d;border:1px solid var(--color-outline-variant)}.f7-motion *{animation-timing-function:cubic-bezier(0,1,0.2,1)!important;transform-style:preserve-3d}.f7-el-page{border-radius:16px;background:var(--color-surface);width:320px;height:560px;position:relative;border:1px solid transparent}.f7-el-bar-icon{width:24px;height:24px;background:var(--color-on-surface);border-radius:4px}.f7-el-navbar{height:64px;background:var(--color-surface-2);border-radius:16px 16px 0 0;display:flex;align-items:center;justify-content:space-between;padding:0 16px;position:relative}.f7-el-navbar-title{position:absolute;left:50%;margin-left:-64px;top:50%;margin-top:-8px;height:16px;background:var(--color-on-surface);width:128px}.f7-el-navbar-left,.f7-el-navbar-right{position:relative}.f7-el-page-text{margin:16px;transform-origin:left}.f7-el-page-text>div::after,.f7-el-page-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-page-text>div::before{width:100%}.f7-el-page-text>div::after{margin-top:8px;width:80%}.f7-el-page-text>div+div{margin-top:8px}.f7-el-view{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-view-item+.f7-el-view-item{margin-top:4px}.f7-el-view-item{background:var(--color-surface-1);min-height:48px;padding-left:16px;display:flex;align-items:center;position:relative}.f7-el-view-item:first-child{border-radius:16px 16px 0 0}.f7-el-view-item:last-child{border-radius:0 0 16px 16px}.f7-el-view-item-divider{background:var(--color-surface-1);height:4px;position:absolute;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-view-item-divider::after{content:'';height:1px;margin-left:16px;display:block;background:var(--color-outline)}.f7-el-view-item-media{width:24px;height:24px;min-width:24px;border-radius:24px;background:var(--color-on-surface);margin-right:16px}.f7-el-view-item-content{width:100%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-right:16px;padding-top:8px;padding-bottom:8px}.f7-el-view-item-title{height:16px;background:var(--color-on-surface);width:100%;transform-origin:left}.f7-el-view-item-arrow{width:12px;height:12px;position:absolute;right:16px;top:18px;border-top:2px solid var(--color-on-surface-variant);border-right:2px solid var(--color-on-surface-variant);transform:rotate(45deg)}.f7-el-view-item-body{width:50%;min-width:0;display:flex;flex-direction:column;padding-top:5px}.f7-el-view-item-subtitle{height:12px;background:var(--color-on-surface);width:100%;transform-origin:top}.f7-el-view-item-text{margin-top:5px;transform-origin:left}.f7-el-view-item-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-view-item-text>div::before{width:200%}.f7-el-view-item-text>div+div{margin-top:5px}.f7-el-view-item-badge{padding-right:8px}.f7-el-view-item-badge .f7-el-badge{width:18px;height:18px;border-radius:18px}.f7-motion{border:none}:host{color:var(--color-on-surface);width:370px;display:block}\n.f7-el-toggle{display:inline-block;position:relative;width:52px;height:32px;margin-right:16px}.f7-el-toggle-box{top:0;width:52px;height:32px;background:var(--color-surface-variant);border-radius:32px;border:2px solid var(--color-outline);display:flex;justify-content:flex-end;align-items:center}.f7-el-toggle-check{position:absolute;background:var(--color-outline);width:16px;height:16px;border-radius:50%;top:25%;margin-left:8px}.f7-motion-toggle .f7-el-page{top:50%;transform:translateY(-50%);display:flex;flex-direction:column;justify-content:center;padding:0 16px}.f7-el-view-item:first-child .f7-el-toggle-box{animation:f7-motion-toggle-box-1 10s infinite}.f7-el-view-item:first-child .f7-el-toggle-check{animation:f7-motion-toggle-check-1 10s infinite}.f7-el-view-item:nth-child(2) .f7-el-toggle-box{animation:f7-motion-toggle-box-2 10s infinite}.f7-el-view-item:nth-child(2) .f7-el-toggle-check{animation:f7-motion-toggle-check-2 10s infinite}.f7-el-view-item:nth-child(3) .f7-el-toggle-box{animation:f7-motion-toggle-box-3 10s infinite}.f7-el-view-item:nth-child(3) .f7-el-toggle-check{animation:f7-motion-toggle-check-3 10s infinite}@keyframes f7-motion-toggle-box-1{0%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}15%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}20%{background:var(--color-primary);border:2px solid var(--color-primary)}25%{background:var(--color-primary);border:2px solid var(--color-primary)}30%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}35%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}40%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}45%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}50%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}55%{background:var(--color-primary);border:2px solid var(--color-primary)}60%{background:var(--color-primary);border:2px solid var(--color-primary)}65%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}100%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}}@keyframes f7-motion-toggle-check-1{0%{background:var(--color-outline);transform:translateX(0) scale(1)}15%{background:var(--color-outline);transform:translateX(0) scale(1)}20%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}25%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}30%{background:var(--color-outline);transform:translateX(0) scale(1)}35%{background:var(--color-outline);transform:translateX(0) scale(1)}40%{background:var(--color-outline);transform:translateX(0) scale(1)}45%{background:var(--color-outline);transform:translateX(0) scale(1)}50%{background:var(--color-outline);transform:translateX(0) scale(1)}55%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}60%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}65%{background:var(--color-outline);transform:translateX(0) scale(1)}100%{background:var(--color-outline);transform:scale(1) translateX(0)}}@keyframes f7-motion-toggle-box-2{0%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}17%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}22%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}27%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}32%{background:var(--color-primary);border:2px solid var(--color-primary)}37%{background:var(--color-primary);border:2px solid var(--color-primary)}42%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}47%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}52%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}57%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}62%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}67%{background:var(--color-primary);border:2px solid var(--color-primary)}72%{background:var(--color-primary);border:2px solid var(--color-primary)}77%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}100%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}}@keyframes f7-motion-toggle-check-2{0%{background:var(--color-outline);transform:translateX(0) scale(1)}17%{background:var(--color-outline);transform:translateX(0) scale(1)}22%{background:var(--color-outline);transform:translateX(0) scale(1)}27%{background:var(--color-outline);transform:translateX(0) scale(1)}32%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}37%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}42%{background:var(--color-outline);transform:translateX(0) scale(1)}47%{background:var(--color-outline);transform:translateX(0) scale(1)}52%{background:var(--color-outline);transform:translateX(0) scale(1)}57%{background:var(--color-outline);transform:translateX(0) scale(1)}62%{background:var(--color-outline);transform:translateX(0) scale(1)}67%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}72%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}77%{background:var(--color-outline);transform:translateX(0) scale(1)}100%{background:var(--color-outline);transform:translateX(0) scale(1)}}@keyframes f7-motion-toggle-box-3{0%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}19%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}24%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}34%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}39%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}44%{background:var(--color-primary);border:2px solid var(--color-primary)}49%{background:var(--color-primary);border:2px solid var(--color-primary)}54%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}59%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}64%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}69%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}74%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}79%{background:var(--color-primary);border:2px solid var(--color-primary)}84%{background:var(--color-primary);border:2px solid var(--color-primary)}89%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}100%{border:2px solid var(--color-outline);background:var(--color-surface-variant)}}@keyframes f7-motion-toggle-check-3{0%{background:var(--color-outline);transform:translateX(0) scale(1)}19%{background:var(--color-outline);transform:translateX(0) scale(1)}24%{background:var(--color-outline);transform:translateX(0) scale(1)}34%{background:var(--color-outline);transform:translateX(0) scale(1)}39%{background:var(--color-outline);transform:translateX(0) scale(1)}44%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}49%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}54%{background:var(--color-outline);transform:translateX(0) scale(1)}59%{background:var(--color-outline);transform:translateX(0) scale(1)}64%{background:var(--color-outline);transform:translateX(0) scale(1)}69%{background:var(--color-outline);transform:translateX(0) scale(1)}74%{background:var(--color-outline);transform:translateX(0) scale(1)}79%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}84%{background:var(--color-on-primary);transform:translateX(125%) scale(1.5)}89%{background:var(--color-outline);transform:translateX(0) scale(1)}100%{background:var(--color-outline);transform:translateX(0) scale(1)}}",r.appendChild(o)}}customElements.define("f7-motion-toggle",Toggle);