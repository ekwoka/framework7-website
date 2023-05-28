class MenuList extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML='<div class="f7-motion f7-motion-menu"><div class="f7-el-page"><div class="f7-el-menu"><div class="f7-el-menu-item"><div class="f7-el-menu-item-icon"></div><div class="f7-el-menu-item-inner"><div class="f7-el-menu-item-title"></div></div></div><div class="f7-el-menu-item"><div class="f7-el-menu-item-icon"></div><div class="f7-el-menu-item-inner"><div class="f7-el-menu-item-title"></div></div></div><div class="f7-el-menu-item"><div class="f7-el-menu-item-icon"></div><div class="f7-el-menu-item-inner"><div class="f7-el-menu-item-title"></div></div></div></div></div></div></div>';const r=document.createElement("style");r.textContent="*{box-sizing:border-box;font-family:-apple-system,system-ui,Helvetica Neue,Helvetica,Arial,sans-serif}:host{--color-primary-shade:#ff927b;--color-primary-tint:#ffd6cd;--color-primary-rgb:255,180,164;--color-primary:#ffb4a4;--color-on-primary:#640d00;--color-primary-container:#8d1600;--color-on-primary-container:#ffdad3;--color-secondary:#e7bdb4;--color-on-secondary:#442a24;--color-secondary-container:#5d3f39;--color-on-secondary-container:#ffdad3;--color-surface:#201a19;--color-on-surface:#ede0dd;--color-surface-variant:#534340;--color-on-surface-variant:#d8c2bd;--color-outline:#a08c88;--color-outline-variant:#534340;--color-inverse-surface:#ede0dd;--color-inverse-on-surface:#362f2d;--color-inverse-primary:#b82000;--color-surface-1:#2b2220;--color-surface-2:#322624;--color-surface-3:#392b28;--color-surface-4:#3b2c2a;--color-surface-5:#3f302c;--color-surface-variant-rgb:83,67,64;--color-on-surface-variant-rgb:216,194,189;--color-surface-1-rgb:43,34,32;--color-surface-2-rgb:50,38,36;--color-surface-3-rgb:57,43,40;--color-surface-4-rgb:59,44,42;--color-surface-5-rgb:63,48,44}.f7-motion{padding:0 24px;height:240px;position:relative;overflow:hidden;perspective:1200px;transform-style:preserve-3d;border:1px solid var(--color-outline-variant)}.f7-motion *{animation-timing-function:cubic-bezier(0,1,0.2,1)!important;transform-style:preserve-3d}.f7-el-page{border-radius:16px;background:var(--color-surface);width:320px;height:560px;position:relative;border:1px solid transparent}.f7-el-bar-icon{width:24px;height:24px;background:var(--color-on-surface);border-radius:4px}.f7-el-navbar{height:64px;background:var(--color-surface-2);border-radius:16px 16px 0 0;display:flex;align-items:center;justify-content:space-between;padding:0 16px;position:relative}.f7-el-navbar-title{position:absolute;left:50%;margin-left:-64px;top:50%;margin-top:-8px;height:16px;background:var(--color-on-surface);width:128px}.f7-el-navbar-left,.f7-el-navbar-right{position:relative}.f7-el-page-text{margin:16px;transform-origin:left}.f7-el-page-text>div::after,.f7-el-page-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-page-text>div::before{width:100%}.f7-el-page-text>div::after{margin-top:8px;width:80%}.f7-el-page-text>div+div{margin-top:8px}.f7-el-view{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-view-item+.f7-el-view-item{margin-top:4px}.f7-el-view-item{background:var(--color-surface-1);min-height:48px;padding-left:16px;display:flex;align-items:center;position:relative}.f7-el-view-item:first-child{border-radius:16px 16px 0 0}.f7-el-view-item:last-child{border-radius:0 0 16px 16px}.f7-el-view-item-divider{background:var(--color-surface-1);height:4px;position:absolute;top:100%;width:100%;left:0;z-index:1;transform-origin:right}.f7-el-view-item-divider::after{content:'';height:1px;margin-left:16px;display:block;background:var(--color-outline)}.f7-el-view-item-media{width:24px;height:24px;min-width:24px;border-radius:24px;background:var(--color-on-surface);margin-right:16px}.f7-el-view-item-content{width:100%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-right:16px;padding-top:8px;padding-bottom:8px}.f7-el-view-item-title{height:16px;background:var(--color-on-surface);width:100%;transform-origin:left}.f7-el-view-item-arrow{width:12px;height:12px;position:absolute;right:16px;top:18px;border-top:2px solid var(--color-on-surface-variant);border-right:2px solid var(--color-on-surface-variant);transform:rotate(45deg)}.f7-el-view-item-body{width:50%;min-width:0;display:flex;flex-direction:column;padding-top:5px}.f7-el-view-item-subtitle{height:12px;background:var(--color-on-surface);width:100%;transform-origin:top}.f7-el-view-item-text{margin-top:5px;transform-origin:left}.f7-el-view-item-text>div::before{content:'';height:12px;display:block;background:var(--color-on-surface-variant);opacity:.25}.f7-el-view-item-text>div::before{width:200%}.f7-el-view-item-text>div+div{margin-top:5px}.f7-el-view-item-badge{padding-right:8px}.f7-el-view-item-badge .f7-el-badge{width:18px;height:18px;border-radius:18px}.f7-motion{border:none}:host{color:var(--color-on-surface);width:370px;display:block}\n.f7-el-menu{position:relative;list-style:none;padding:0;margin:32px 16px;border-radius:16px}.f7-el-menu-item+.f7-el-menu-item{margin-top:8px}.f7-el-menu-item{background:var(--color-surface-1);min-height:56px;display:flex;align-items:center;position:relative;border-radius:32px;padding-left:16px}.f7-el-menu-item-icon{width:24px;height:24px;border-radius:4px;background:var(--color-on-surface-variant);margin-right:16px}.f7-el-menu-item-inner{width:100%;display:flex;align-items:center;justify-content:flex-start}.f7-el-menu-item-title{height:16px;background:var(--color-on-surface);width:40%}.f7-motion-menu .f7-el-page{top:50%;transform:translateY(-50%);display:flex;justify-content:center;flex-direction:column}.f7-motion-menu .f7-el-menu-item:first-child{animation:f7-motion-menu-item-1 10s infinite}.f7-motion-menu .f7-el-menu-item:nth-child(2){animation:f7-motion-menu-item-2 10s infinite}.f7-motion-menu .f7-el-menu-item:nth-child(3){animation:f7-motion-menu-item-3 10s infinite}@keyframes f7-motion-menu-item-1{0%{background:var(--color-surface-1)}15%{background:var(--color-surface-1)}25%{background:var(--color-secondary-container)}25.5%{background:var(--color-surface-1)}35%{background:var(--color-surface-1)}45%{background:var(--color-surface-1)}65%{background:var(--color-surface-1)}75%{background:var(--color-secondary-container)}75.5%{background:var(--color-surface-1)}100%{background:var(--color-surface-1)}}@keyframes f7-motion-menu-item-2{0%{background:var(--color-surface-1)}17%{background:var(--color-surface-1)}27%{background:var(--color-surface-1)}37%{background:var(--color-secondary-container)}37.5%{background:var(--color-surface-1)}47%{background:var(--color-surface-1)}67%{background:var(--color-surface-1)}77%{background:var(--color-surface-1)}87%{background:var(--color-secondary-container)}87.5%{background:var(--color-surface-1)}100%{background:var(--color-surface-1)}}@keyframes f7-motion-menu-item-3{0%{background:var(--color-surface-1)}19%{background:var(--color-surface-1)}29%{background:var(--color-surface-1)}39%{background:var(--color-surface-1)}49%{background:var(--color-secondary-container)}49.5%{background:var(--color-surface-1)}69%{background:var(--color-surface-1)}79%{background:var(--color-surface-1)}89%{background:var(--color-surface-1)}99%{background:var(--color-secondary-container)}100%{background:var(--color-surface-1)}}",e.appendChild(r)}}customElements.define("f7-motion-menulist",MenuList);