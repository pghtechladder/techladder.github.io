;/*FB_PKG_DELIM*/

__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql","CometTooltip_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");i!==void 0?i:i=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,b){var d;d=(d=b.count)!=null?d:0;b=(b=b.sample_entities)!=null?b:[];d=d-b.length;var e=d>0;return k.jsx(c("CometTooltip_DEPRECATED.react"),{tooltip:k.jsxs(k.Fragment,{children:[b.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?k.jsx("div",{children:a},b):null}),e?k.jsx("div",{children:h._("and {count} more...",[h._param("count",d)])}):null]}),children:a})};g["default"]=a}),226);
__d("CometEntityHeaderStickyBar.react",["BaseRow.react","BaseRowItem.react","BaseView.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useEffect,l=b.useImperativeHandle,m=b.useRef,n={container:{transitionDuration:"xhb22t3",transitionProperty:"x11xpdln",transitionTimingFunction:"x1jrttnq",$$css:!0},containerSticky:{transform:"x105ttfm",$$css:!0},fadeInTransition:{transitionDuration:"x1bvr7z4",transitionProperty:"x1jl3cmp",transitionTimingFunction:"xu06nn8",$$css:!0},fadeOutTransition:{transitionDuration:"x2r5gy4",transitionProperty:"x1jl3cmp",transitionTimingFunction:"xu06nn8",$$css:!0},primaryRow:{minHeight:"x879a55",opacity:"x1hc1fzr",visibility:"xnpuxes",$$css:!0},primaryRowSticky:{opacity:"xg01cxk",visibility:"xlshs6z",$$css:!0},root:{overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0},stickyRow:{height:"x5yr21d",opacity:"xg01cxk",position:"x10l6tqk",top:"xdsb8wn",visibility:"xlshs6z",width:"xh8yej3",$$css:!0},stickyRowSticky:{opacity:"x1hc1fzr",visibility:"xnpuxes",$$css:!0}};function o(a,b,c){b(!c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.remove(b)}),b(c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.add(b)})}e=j.forwardRef(a);function a(a,b){var d=a.initialSticky;d=d===void 0?!1:d;var e=a.isStickyExpanding;e=e===void 0?!1:e;var f=a.primaryContent,g=a.stickyContent,i=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["initialSticky","isStickyExpanding","primaryContent","stickyContent","xstyle"]);var p=m(d),q=m(),r=m(),s=m(),t=m(),u=function(){q.current!=null&&(window.cancelAnimationFrame(q.current),q.current=null)};l(b,function(){return{setSticky:function(a){p.current=a,u(),q.current=window.requestAnimationFrame(function(){q.current=null;var b=r.current;b!=null&&b instanceof HTMLDivElement&&o(b,function(a){return(h||(h=c("stylex")))(a&&n.containerSticky)},a);b=s.current;b!=null&&b instanceof HTMLDivElement&&o(b,function(a){return(h||(h=c("stylex")))(a&&n.primaryRowSticky,a?n.fadeInTransition:n.fadeOutTransition)},a);b=t.current;b!=null&&b instanceof HTMLDivElement&&o(b,function(a){return(h||(h=c("stylex")))(a&&n.stickyRowSticky,a?n.fadeOutTransition:n.fadeInTransition)},a)})}}});k(function(){return u},[]);return j.jsx(c("BaseView.react"),babelHelpers["extends"]({},a,{xstyle:[n.root,i],children:j.jsxs(c("BaseView.react"),{ref:r,xstyle:[n.container,p.current&&n.containerSticky],children:[j.jsx(c("BaseRow.react"),{ref:s,xstyle:[n.primaryRow,p.current&&n.primaryRowSticky,p.current?n.fadeInTransition:n.fadeOutTransition],children:j.jsx(c("BaseRowItem.react"),{expanding:!0,children:f})}),j.jsx(c("BaseRow.react"),{ref:t,xstyle:[n.stickyRow,p.current&&n.stickyRowSticky,p.current?n.fadeOutTransition:n.fadeInTransition],children:j.jsx(c("BaseRowItem.react"),{expanding:e,verticalAlign:"center",children:g})})]})}))}a.displayName=a.name+" [from "+f.id+"]";d=e;g["default"]=d}),98);
__d("CometEntityHeaderStickyBottomRow_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderStickyBottomRow_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{args:null,kind:"FragmentSpread",name:"useBaseEntityHeaderProfile_profile"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("useCometEntityStickyHeaderHeadline",["CometListCellStrict_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useMemo,k=b.useState;function a(a){var b=a.headline,d=a.linkProps,e=a.onPress,f=a.onStickyChange,g=a.paddingHorizontal,h=a.profilePhoto,m=a.profilePhotoShape,n=a.url;a=k(!1);var o=a[0],p=a[1];a=function(a){p(a),f&&f(a)};var q=j(function(){return babelHelpers["extends"]({preventLocalNavigation:!0,url:n},d)},[d,n]);h=i.jsx(c("CometListCellStrict_DEPRECATED.react"),{addOnStart:h!=null?{shape:m,size:40,source:{uri:h},type:"profile-photo"}:void 0,headline:b,headlineLineLimit:1,level:3,linkProps:q,onPress:(m=e)!=null?m:l,paddingHorizontal:g});return{headline:h,isSticky:o,onStickyChange:a}}function l(a){a.preventDefault(),scrollTo({behavior:"smooth",left:0,top:0})}g["default"]=a}),98);
__d("useResizeObserverLoopLimitSafeCallbackWrapper",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=j(null),c=function(c,d,e){b.current!=null&&window.cancelAnimationFrame(b.current),b.current=window.requestAnimationFrame(function(){a(c,d,e)})};i(function(){return function(){b.current!=null&&window.cancelAnimationFrame(b.current)}},[]);return c}g["default"]=a}),98);
__d("useCometEntityStickyHeaderResizeObserver",["react","useResizeObserver","useResizeObserverLoopLimitSafeCallbackWrapper"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useRef,j=b.useState;function a(a){a=a.topOffset;a=a===void 0?0:a;var b=i(),d=j(0),e=d[0],f=d[1];d=c("useResizeObserver")(c("useResizeObserverLoopLimitSafeCallbackWrapper")(function(a){e!==a.height&&f(a.height)}));return{resizeObserverRef:d,stickyHeaderRef:b,topOffset:a}}g["default"]=a}),98);
__d("CometEntityStickyHeader.react",["BaseRow.react","BaseRowItem.react","BaseStickyHeader.react","CometEntityHeaderResponsiveRow.react","CometEntityHeaderStickyBar.react","react","useCometEntityStickyHeaderHeadline","useCometEntityStickyHeaderResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useRef,k={headerHiddenByDefault:{display:"x78zum5",flexDirection:"xdt5ytf",height:"xqtp20y",justifyContent:"x13a6bvl",$$css:!0},headerHiddenByDefaultNotSticky:{pointerEvents:"x47corl",visibility:"xlshs6z",zIndex:"x8knxv4",$$css:!0},headerHiddenByDefaultSticky:{position:"xixxii4",width:"xh8yej3",$$css:!0},row:{backgroundColor:"x1ve1bff",boxShadow:"xvo6coq",flexShrink:"x2lah0s",$$css:!0}};function a(a){var b=a.headline,d=a.headlineLinkProps,e=a.headlineOnPress,f=a.hiddenByDefault;f=f===void 0?!1:f;var g=a.onStickyChange,h=a.paddingHorizontal,l=a.primaryContent,m=a.profilePhoto,n=a.profilePhotoShape,o=a.secondaryContent,p=a.topOffset;a=a.url;var q=j();b=c("useCometEntityStickyHeaderHeadline")({headline:b,linkProps:d,onPress:e,onStickyChange:function(a){q.current!=null&&q.current.setSticky(a),g&&g(a)},paddingHorizontal:h,profilePhoto:m,profilePhotoShape:n,url:a});d=b.headline;e=b.isSticky;h=b.onStickyChange;m=c("useCometEntityStickyHeaderResizeObserver")({topOffset:p});n=m.resizeObserverRef;a=m.stickyHeaderRef;b=m.topOffset;return i.jsx(c("BaseStickyHeader.react"),{onStickyChange:h,ref:a,topOffset:b,xstyle:[f&&k.headerHiddenByDefault,f&&(e?k.headerHiddenByDefaultSticky:k.headerHiddenByDefaultNotSticky)],children:i.jsx(c("CometEntityHeaderResponsiveRow.react"),{ref:n,xstyle:k.row,children:i.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[i.jsx(c("BaseRowItem.react"),{expanding:!0,children:i.jsx(c("CometEntityHeaderStickyBar.react"),{primaryContent:l,ref:q,stickyContent:i.jsx(c("BaseRow.react"),{align:"start",children:i.jsx(c("BaseRowItem.react"),{children:d})})})}),o!=null&&i.jsx(c("BaseRowItem.react"),{verticalAlign:"center",children:typeof o==="function"?o({sticky:e}):o})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useBaseEntityHeaderProfile_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useBaseEntityHeaderProfile_profile",selections:[{alias:"profile_picture_for_sticky_bar",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("useBaseEntityHeaderProfile",["RelayHooks","react","useBaseEntityHeaderProfile_profile.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;i||d("react");function a(a){var c;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useBaseEntityHeaderProfile_profile.graphql"),a);c=(c=a.profile_picture_for_sticky_bar)==null?void 0:c.uri;var e;switch(a.__typename){case"Page":case"User":case"Hashtag":e="circle";break;default:e="roundedRect"}a=a.url;return{profilePhoto:c,profilePhotoShape:e,url:a}}g["default"]=a}),98);
__d("CometEntityHeaderStickyBottomRow.react",["CometEntityHeaderStickyBottomRow_entity.graphql","CometEntityStickyHeader.react","CometRelay","react","recoverableViolation","useBaseEntityHeaderProfile"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.entity,f=a.headline,g=a.paddingHorizontal;a=babelHelpers.objectWithoutPropertiesLoose(a,["entity","headline","paddingHorizontal"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityHeaderStickyBottomRow_entity.graphql"),e);var i=c("useBaseEntityHeaderProfile")(e);f=(f=f)!=null?f:e.name;if(f==null)return c("recoverableViolation")("Name of the entity cannot be null","comet_ui");e=babelHelpers["extends"]({},a,i,{headline:f,paddingHorizontal:g});return j.jsx(c("CometEntityStickyHeader.react"),babelHelpers["extends"]({},e))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTab.react",["BaseNonBreakingSpace.react","CometFocusGroupContext","CometPressable.react","FDSIcon.react","FDSTextWithIcon.react","ReactDOM","TetraText.react","gkx","react","stylex","useIntersectionObserver","useLayoutEffect_SAFE_FOR_SSR","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useRef,n=b.useState,o={icon:{lineHeight:"x14ju556",paddingEnd:"xs413o2",$$css:!0},iconEnd:{marginStart:"xsgj6o6",$$css:!0},iconEnd8:{marginStart:"x1i64zmx",$$css:!0},iconStart:{marginEnd:"xw3qccf",$$css:!0},iconStart8:{marginEnd:"x1emribx",$$css:!0},pressable:{appearance:"xjyslct",backgroundColor:"xjbqb8w",backgroundImage:"x18o3ruo",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",color:"x1heor9g",cursor:"x1ypdohk",display:"x78zum5",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",textAlign:"x16tdsg8",textDecoration:"x1hl2dhg",zIndex:"x1vjfegm",$$css:!0},selected:{borderTopEndRadius:"x11t77rh",borderTopStartRadius:"x146dn1l",bottom:"x1ey2m1c",end:"xds687c",height:"xuoj239",position:"x10l6tqk",start:"x17qophe",$$css:!0},tab:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1hshjfz",position:"x1n2onr6",$$css:!0}};e=j.forwardRef(a);function a(a,b){var e=a.badge,f=a.badgeCap,g=a.containerRef,i=a.highlightColor,p=a.icon,q=a.iconColor;q=q===void 0?"secondary":q;var r=a.iconLocation;r=r===void 0?"right":r;var s=a.iconSize;s=s===void 0?16:s;var t=a.label,u=a.labelIsHidden;u=u===void 0?!1:u;var v=a.onHidden,w=a.pressableXStyle,x=a.reduceEmphasis;x=x===void 0?!1:x;var y=a.selected;y=y===void 0?!1:y;var z=a.tabRef,A=a.underlineColor,B=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badge","badgeCap","containerRef","highlightColor","icon","iconColor","iconLocation","iconSize","label","labelIsHidden","onHidden","pressableXStyle","reduceEmphasis","selected","tabRef","underlineColor","xstyle"]);var C=n(!1),D=C[0],E=C[1],F=m(v);c("useLayoutEffect_SAFE_FOR_SSR")(function(){F.current=v},[v]);C=l(c("CometFocusGroupContext"));C=C.FocusItem;var G=k(function(a){a=a.intersectionRatio;var b=a<.5;b!==D&&(c("gkx")("2865")?(E(b),F.current&&F.current(b)):d("ReactDOM").flushSync(function(){E(b),F.current&&F.current(b)}))},[D,F]);G=c("useIntersectionObserver")(G,{root:g?function(){return g.current}:null,threshold:.5});f=!u&&e!=null?typeof e==="number"?j.jsxs(j.Fragment,{children:[t,j.jsx(c("BaseNonBreakingSpace.react"),{size:.75}),j.jsx(c("TetraText.react"),{color:y?"highlight":"secondary",type:"body4",children:f!=null&&e>f?f+"+":e})]}):j.jsx(c("FDSTextWithIcon.react"),{iconAfter:e,spacing:.75,children:t}):u?null:t;y&&i!=null&&(f=j.jsx("span",{style:{color:i},children:f}));x?f=j.jsx(c("TetraText.react"),{color:y?"highlight":"secondary",type:"body3",children:f}):f=j.jsx(c("TetraText.react"),{color:y?"highlight":"secondary",type:"bodyLink3",children:f});e=p!=null&&r==="left"?j.jsx("div",{className:(h||(h=c("stylex")))(o.icon,!u&&(s===16?o.iconStart:o.iconStart8)),children:j.jsx(c("FDSIcon.react"),{color:y?"highlight":q,icon:p,isDecorative:!0,size:s})}):null;i=p!=null&&r==="right"?j.jsx("div",{className:(h||(h=c("stylex")))(o.icon,(e!=null||!u)&&(s===16?o.iconEnd:o.iconEnd8)),children:j.jsx(c("FDSIcon.react"),{color:y?"highlight":q,icon:p,isDecorative:!0,size:s})}):null;x=c("useMergeRefs")(G,b,z);r=j.jsxs("div",{className:(h||(h=c("stylex")))(o.tab,B),ref:x,children:[e,f,i,j.jsx("div",{className:h(y&&o.selected),style:{backgroundColor:y?A:void 0}})]});if(a.onPress!=null||a.linkProps!=null){q=j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{"aria-hidden":D,"aria-selected":y,disabled:D,display:"inline",focusable:!D,label:u?t:void 0,overlayDisabled:y,ref:x,role:"tab",xstyle:[o.pressable,w],children:r}));return C&&!D?j.jsx(C,{children:q}):q}return r}a.displayName=a.name+" [from "+f.id+"]";b=e;g["default"]=b}),98);
__d("FDSTabs.react",["fbt","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometFocusGroup.react","CometKeys","CometTab.react","CometVisualCompletionAttributes","CurrentLocale","Locale","ReactDOM","SVGIcon","TriangleDownFilled20.svg.react","focusScopeQueries","gkx","mergeRefs","react","requireDeferred","stylex","useResizeObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useEffect,n=b.useId,o=b.useMemo,p=b.useRef,q=b.useState,r=c("requireDeferred")("CometTabMenu.react").__setRef("FDSTabs.react"),s={invisible:{opacity:"xg01cxk",$$css:!0},moreTab:{height:"x1itg65n",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0},moreTabHidden:{display:"x1s85apg",$$css:!0},moreTabVisible:function(a){return[{start:"xejnhxz",left:null,right:null,position:"x10l6tqk",top:"x13vifvy",$$css:!0},{"--insetInlineStart":function(a){return typeof a==="number"?a+"px":a!=null?a:"initial"}(a)}]},moreTabVisual:{display:"x3nfvp2",$$css:!0},moreWrapper:{display:"x1rg5ohu",height:"x1itg65n",position:"x1n2onr6",verticalAlign:"x16dsc37",$$css:!0},moreWrapperAdaptive:{height:"x1x4j4od",maxHeight:"xyhpeqk",minHeight:"x2lwn1j",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},root:{height:"x1itg65n",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},tab:{display:"x3nfvp2","float":"xrbpyxo",height:"x1itg65n",verticalAlign:"x16dsc37",$$css:!0},tabsContainer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}},t={"default":{width:"x1k51ox",$$css:!0},englishOrShorter:{width:"x192njpj",$$css:!0}},u=["en_US","en_GB","nl_NL","vi_VN","af_ZA","fy_NL","kk_KZ","cs_CZ","sw_KE","it_IT","pt_BR","pt_PT","bg_BG","hr_HR","nn_NO","es_ES","es_LA","fr_FR","ca_ES","fr_CA","si_LK","sr_RS","nb_NO","sv_SE","zh_HK","zh_TW","he_IL","ne_NP","eo_EO"],v=d("Locale").isRTL();function a(a){var b=a.heightXStyle,e=a.maxHeightXStyle,f=a.tabs,g=a.maxTabs,j=g===void 0?f.length:g,z=a.menuSize,A=a.moreTabRef,B=a.moreTabStyles,C=a.moreTabXStyle,D=a.moreWrapperXStyle,E=a.tabsContainerStyle;g=a.truncateMenu;var F=g===void 0?!1:g,G=a.onMoreTabPress,H=n(),I=n(),J=p(null),K=p([]),L=p(null),M=p(function(){});g=l(function(){M.current()},[]);var N=c("useResizeObserver")(g);a=q(y(f.length,j));var O=a[0],P=a[1];g=q(!1);var Q=g[0],R=g[1];m(function(){P(y(f.length,j))},[f.length,j]);var S=j<f.length?f.slice(0,j):f,T=j>=f.length,U=o(function(){return O.some(function(a){return(a=f[a])==null?void 0:a.selected})},[O,f]);a=q(null);var V=a[0],W=a[1];g=q(!1);var X=g[0],Y=g[1],Z=p(null);m(function(){var a=function(){var a=Z.current,b=a==null?void 0:a.parentElement;if(a!=null&&b!=null){a=a.getBoundingClientRect();b=b.getBoundingClientRect();if(a.height<5){W(null);return}v?W(b.right-a.right):W(a.left-b.left)}};a();var b=null,c=function(){b!=null&&window.clearTimeout(b),d("ReactDOM").flushSync(function(){Y(!0)}),b=window.setTimeout(function(){a(),Y(!1)},300)};M.current=c;return function(){M.current=function(){},b!=null&&window.clearTimeout(b)}},[]);var $=k.jsx("div",babelHelpers["extends"]({"aria-hidden":!0},(i||(i=c("stylex"))).props(s.moreWrapper,t["default"],u.includes(c("CurrentLocale").get())&&t.englishOrShorter,b,T&&s.moreWrapperAdaptive,s.moreTabVisual,V!=null&&!X&&s.invisible),{ref:Z,children:k.createElement(c("CometTab.react"),babelHelpers["extends"]({},B,{"aria-controls":H,"aria-expanded":Q,"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,id:I,key:"more-tab-visual",label:h._("More"),role:"tab",selected:U,testid:void 0,xstyle:C}))})),aa=l(function(a,f){a=c("mergeRefs")(a,L,A);var g=[{command:{key:c("CometKeys").DOWN},description:h._("Open Menu"),handler:f}];return k.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:g,xstyle:[t["default"],u.includes(c("CurrentLocale").get())&&t.englishOrShorter,D,e,V==null?s.moreTabHidden:s.moreTabVisible(V),X&&s.invisible],children:k.jsx(c("CometTab.react"),babelHelpers["extends"]({},B,{"aria-controls":H,"aria-expanded":Q,"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,id:I,label:h._("More"),onPress:function(){f(),G==null?void 0:G()},pressableXStyle:[s.moreTab,b],ref:a,role:"tab",selected:U,testid:void 0,xstyle:C}))},"more-tab-functional")},[A,D,e,V,X,B,H,Q,I,b,U,C,G]);return k.jsx(c("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,role:"tablist",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return k.jsx("div",babelHelpers["extends"]({className:(i||(i=c("stylex")))(s.root,a,b),role:"tablist"},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:k.jsxs("div",{className:"x14ju556 x1n2onr6",children:[T&&k.jsx("div",{className:"x6ikm8r x10wlt62 xlshs6z",children:S.map(function(a,b){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return k.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{key:b+"tab",ref:function(a){return K.current[b]=a},role:"tab",selected:a.selected,xstyle:[s.tab,a.xstyle]}))})}),k.jsxs("div",{className:i(s.tabsContainer,E),"data-testid":void 0,ref:N,children:[$,S.map(function(a,b){return k.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{containerRef:J,key:b+"tab",onHidden:function(a){if(c("gkx")("2865"))P(function(c){return a?w(c,b):x(c,b)});else{var d=a?w(O,b):x(O,b);d!==O&&P(d)}},pressableXStyle:s.tab,ref:function(a){return K.current[b]=a},role:"tab",selected:a.selected}))}),V!=null&&k.jsx(c("CometDeferredPopoverTrigger.react"),{onVisibilityChange:R,popoverProps:{ariaLabelledby:I,id:H,menuItems:O.map(function(a){return f[a]}).filter(Boolean),menuSize:z,truncate:F},popoverResource:r,children:aa})]})]})}))}})}a.displayName=a.name+" [from "+f.id+"]";function w(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function x(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}function y(a,b){return Array.from({length:a}).map(function(a,b){return b}).filter(function(a){return a>=b})}g["default"]=a}),226);
__d("CometEntityHeaderTabs.react",["FDSTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={entityHeaderTab:{height:"xng8ra",paddingEnd:"x1pi30zi",paddingLeft:null,paddingRight:null,paddingStart:"x1swvt13",$$css:!0}};function a(a){var b=a.maxTabs,d=a.menuSize,e=a.onMoreTabPress;a=a.tabs;return i.jsx(c("FDSTabs.react"),{maxTabs:b,menuSize:d,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:j.entityHeaderTab,onMoreTabPress:e,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:j.entityHeaderTab})}),truncateMenu:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFileSelector.react",["Promise","promiseDone","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useEffect,m=e.useRef;function n(a){return a.map(function(a){if(a.indexOf("index.html")!==-1||a[0]===".")return a;c("recoverableViolation")('Accept parameter "'+a+'" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',"profile_comet");return"."+a}).join(",")}function a(a){var d=a.accept,e=a.children,f=a.multiple;f=f===void 0?!1:f;var g=a.onFilesSelected,i=m(null);l(function(){var a=i.current;if(a!=null){var b=function(a){a.stopPropagation()};a.addEventListener("click",b);return function(){a.removeEventListener("click",b)}}});a=k(function(){i.current!=null&&i.current.click()},[]);var o=k(function(a){var d=g(a.currentTarget.files);d instanceof(h||(h=b("Promise")))&&c("promiseDone")(d);a.currentTarget.value=""},[g]);return j.jsxs(j.Fragment,{children:[j.jsx("input",{accept:d!=null?n(d):void 0,className:"x1s85apg",multiple:f,onChange:o,ref:i,type:"file"}),e(a)]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ComposedInlineStyle",[],(function(a,b,c,d,e,f){a=Object.freeze({NONE:0,BOLD:1,ITALIC:2,UNDERLINE:4,CODE:8,STRIKETHROUGH:16,SUBSCRIPT:32,SUPERSCRIPT:64,QUOTE:128,UNORDEREDLIST:256,LISTITEM:512,MEDIUM_WEIGHT:1024,SEMIBOLD:2048,HEADLINE1:4096,HEADLINE2:8192,HEADLINE3:16384,ORDEREDLIST:32768,HORIZONTALRULER:65536,TABLE:131072,TABLEDATA:262144,TABLEROW:524288,PARAGRAPH:1048576,LIGHTSTRIKETHROUGH:2097152,HEADLINE4:4194304,COPYABLE:8388608,LINEBREAK:16777216,PRE:33554432,EXPANDABLE:67108864,EXPANDABLETITLE:134217728,EXPANDABLEBODY:268435456,EXPANDABLECONTAINER:536870912,EXPANDABLESUMMARY:1073741824,SPOILER:2147483648});f["default"]=a}),66);
__d("CometInlineEntityRenderer",["ComposedInlineStyle","TetraText.react","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={blockquote:{marginBottom:"x13xjzxd",marginTop:"x14beivq",marginEnd:"x1m39q7l",marginStart:"x540dpk",$$css:!0},bold:{fontWeight:"x1s688f",$$css:!0},code:{backgroundColor:"xmjcpbm",fontSize:"x1hjwid2",paddingTop:"x4p5aij",paddingBottom:"x1j85h84",paddingStart:"xnzlfwo",paddingLeft:null,paddingRight:null,paddingEnd:"xwjfhlt",textTransform:"x6mezaz",$$css:!0},li:{listStyle:"x13mj8vy",$$css:!0},lightStrike:{opacity:"x1ks1olk",$$css:!0},ol:{listStyle:"xua7rxp",marginStart:"x1d52u69",$$css:!0},ul:{listStyle:"xs6hwqx",marginStart:"x1d52u69",$$css:!0}};a=function(a,b){switch(b.inline_style){case"BOLD":case c("ComposedInlineStyle").BOLD:return i.jsx(d("react-strict-dom").html.b,{style:j.bold,children:a});case"ITALIC":case c("ComposedInlineStyle").ITALIC:return i.jsx(d("react-strict-dom").html.i,{children:a});case"UNDERLINE":case c("ComposedInlineStyle").UNDERLINE:return i.jsx(d("react-strict-dom").html.u,{children:a});case"CODE":case c("ComposedInlineStyle").CODE:return i.jsx(d("react-strict-dom").html.code,{style:j.code,children:a});case"LIGHTSTRIKETHROUGH":case c("ComposedInlineStyle").LIGHTSTRIKETHROUGH:return i.jsx(d("react-strict-dom").html.s,{style:j.lightStrike,children:a});case"STRIKETHROUGH":case c("ComposedInlineStyle").STRIKETHROUGH:return i.jsx(d("react-strict-dom").html.s,{children:a});case"SUBSCRIPT":case c("ComposedInlineStyle").SUBSCRIPT:return i.jsx(d("react-strict-dom").html.sub,{children:a});case"SUPERSCRIPT":case c("ComposedInlineStyle").SUPERSCRIPT:return i.jsx(d("react-strict-dom").html.sup,{children:a});case"QUOTE":case c("ComposedInlineStyle").QUOTE:return i.jsx(d("react-strict-dom").html.blockquote,{style:j.blockquote,children:a});case"UNORDEREDLIST":case c("ComposedInlineStyle").UNORDEREDLIST:return i.jsx(d("react-strict-dom").html.ul,{style:j.ul,children:a});case"ORDEREDLIST":case c("ComposedInlineStyle").ORDEREDLIST:return i.jsx(d("react-strict-dom").html.ol,{style:j.ol,children:a});case"LISTITEM":case c("ComposedInlineStyle").LISTITEM:return i.jsx(d("react-strict-dom").html.li,{style:j.li,children:a});case"HEADLINE1":case c("ComposedInlineStyle").HEADLINE1:return i.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized1",children:a});case"HEADLINE2":case c("ComposedInlineStyle").HEADLINE2:return i.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:a});case"HEADLINE3":case c("ComposedInlineStyle").HEADLINE3:return i.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:a});case"HORIZONTALRULER":case c("ComposedInlineStyle").HORIZONTALRULER:return i.jsx(d("react-strict-dom").html.hr,{});case"LINEBREAK":case c("ComposedInlineStyle").LINEBREAK:return i.jsx(d("react-strict-dom").html.br,{});case"SPOILER":case c("ComposedInlineStyle").SPOILER:return a;default:return a}};g["default"]=a}),98);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometMetaLinkedEntityRenderer_entity.graphql","CometTextContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");h!==void 0?h:h=b("CometMetaLinkedEntityRenderer_entity.graphql");function k(a){var b,e=a.entity;a=a.node;b=(b=d("CometTextContext").useCometTextContext())==null?void 0:b.type;if(e.url==null)return a;return b==null||!b.startsWith("meta")?j.jsx(c("CometLink.react"),{href:e.url,children:a}):j.jsx(c("CometLink.react"),{color:"secondary",href:e.url,weight:b==="meta3"||b==="meta4"?"normal":"semibold",children:a})}k.displayName=k.name+" [from "+f.id+"]";a=function(a,b){return j.jsx(k,{entity:b,node:a})};g["default"]=a}),98);
__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometExternalLinkedEntityRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","ProfileCometTextWithEntities_textWithEntities.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.textWithEntities,f=a.useExternalLink;f=f===void 0?!1:f;var g=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useExternalLink","useMetaTextContext"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTextWithEntities_textWithEntities.graphql"),e);g=g!=null&&g;return j.jsx(c("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[g?c("CometMetaLinkedEntityRenderer"):f?c("CometExternalLinkedEntityRenderer"):c("CometLinkedEntityRenderer")],Aggregate:[g?c("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):c("CometAggregatedEntitiesTooltipRenderer")],Event:[c("CometHovercardEntityRenderer")],Group:[c("CometHovercardEntityRenderer")],Image:[c("CometImageEntityRenderer")()],Inline:[c("CometInlineEntityRenderer")],Page:[c("CometHovercardEntityRenderer")],User:[c("CometHovercardEntityRenderer")],XFBWorkroomsUser:[c("CometHovercardEntityRenderer")]},textWithEntities:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometDefaultLoggedOutDialog",["fbt","CAAWebClientLoggingEventSource","useCAALoggedOutDialogWrapper","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){var e=c("useIsLoggedOut")(),f=h._("See more on Facebook");a=c("useCAALoggedOutDialogWrapper")({dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.PAGE,legal_reporting_cta_type:a,legal_reporting_uri:b,title:f});return e?a:null}g["default"]=a}),226);
__d("useProfileCometStoryStatus_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useProfileCometStoryStatus_user",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_close_friend_badge",storageKey:null},a,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[a,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"story_bucket(first:1)"}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("useProfileCometStoryStatus",["CometRelay","XCometStoriesControllerRouteBuilder","react","useProfileCometStoryStatus_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;i||d("react");function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useProfileCometStoryStatus_user.graphql"),a);var e="none",f;a=(a=a.story_bucket)==null?void 0:a.nodes;var g=!1;if(a){var i;a=a?a[0]:null;var j=(a==null?void 0:a.id)||null;i=(a==null?void 0:(i=a.first_story_to_show)==null?void 0:i.id)||null;if(a&&j&&i){var k;k=((k=a.first_story_to_show)==null?void 0:(k=k.story_card_seen_state)==null?void 0:k.is_seen_by_viewer)||!1;e=k?"seen":"unseen";g=(k=a.should_show_close_friend_badge)!=null?k:!1}e!=="none"&&(f=c("XCometStoriesControllerRouteBuilder").buildURL({bucket_id:j,card_id:i,view_single:!1}))}return{shouldShowCloseFriendsBadge:g,storyStatus:e,storyUrl:f}}g["default"]=a}),98);