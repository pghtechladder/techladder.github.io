;/*FB_PKG_DELIM*/

__d("PCXLearnMoreLink_rendererRef.graphql",["cr:2193"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:2193")}),null);
__d("PCXLearnMoreLink.react",["CDSInlinePressableText.react","CDSText.react","CometRelay","Locale","MetaBrandCaretLeftOutline24.svg.react","MetaBrandCaretRightOutline24.svg.react","PCActionSpec","PCXLearnMoreLink_rendererRef.graphql","react","translatedServerString","useJSON"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){a=a.rendererRef;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXLearnMoreLink_rendererRef.graphql"),a);var e=a.action;a=a.content;a=c("useJSON")((a=a)!=null?a:"");e=d("PCActionSpec").usePCPressablePropsFromPCAction({action$key:e});e.pcAdditionalLinkProps;e=babelHelpers.objectWithoutPropertiesLoose(e,["pcAdditionalLinkProps"]);var f=d("Locale").isRTL()?c("MetaBrandCaretLeftOutline24.svg.react"):c("MetaBrandCaretRightOutline24.svg.react");return j.jsx("div",{className:"x1iorvi4",children:j.jsx(c("CDSText.react"),{textStyle:"body",children:j.jsx(c("CDSInlinePressableText.react"),babelHelpers["extends"]({ariaLabel:a.alt!=null?c("translatedServerString")(a.alt):void 0},e,{icon:f,children:a.label}))})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXLearnMoreLink_rendererRef$normalization.graphql",["cr:3012"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3012")}),null);
__d("PCXVideo_rendererRef.graphql",["cr:3011"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3011")}),null);
__d("SubRipText",[],(function(a,b,c,d,e,f){var g={size:"90%"};function h(a){var b=Number(a.substr(0,a.length-1)),c=a.substr(-1);switch(c){case"s":return b;case"m":return b*60;case"h":return b*3600}c=a.split(":");b=Number(c[c.length-1].replace(/,/,"."));c.length>1&&(b+=Number(c[c.length-2])*60);c.length>2&&(b+=Number(c[c.length-3])*3600);return b}function i(a){a=a.split(/\r\n|\r|\n/).map(function(a){return a.trim()});var b=[],c=0;do{var d=a.indexOf("",c);d<0&&(d=a.length);var e=k(a.slice(c,d));e&&b.push(e);c=d+1}while(c>0&&c<a.length);return b}function j(a){a=a.split("-->");if(a.length!=2)return null;var b=h(a[0].trim());a=h(a[1].trim());return Number.isNaN(a)||Number.isNaN(b)?null:{begin:b,end:a}}function k(a){if(a.length<3)return null;var b=l(a[0]),c=j(a[1]);return!c?null:{counter:b,begin:c.begin,end:c.end,text:a.slice(2,6)}}function l(a){return Number(a.trim())}function m(a){a=a.split(".");return a[0].length<2?"0"+a.join("."):a.join(".")}function n(a){var b=m(Math.floor(a/3600).toString()),c=m(Math.floor(a%3600/60).toString());a=m((a%60).toFixed(3));return b+":"+c+":"+a}function o(a,b,c){var d="";if(c)for(var e in c)d+=" "+e+":"+c[e];return n(a)+" --> "+n(b)+d}function p(a,b){return a.counter+"\n"+o(a.begin,a.end,b)+"\n"+a.text.join("\n")+"\n"}function q(a,b){return"WEBVTT\n\n"+a.map(function(a){return p(a,b)}).join("\n")}a=function(){function a(a){var b=this;this.$1=i(a);this.$1.sort(function(a,b){return a.counter-b.counter});this.$2=this.$1.map(function(a,b){return b}).sort(function(a,c){return b.$1[a].begin-b.$1[c].begin});this.invalidateCache();this.$6=g}var b=a.prototype;b.$7=function(a){return this.$1[this.$2[a]]};b.$8=function(a){var b=this.$3;while(b<this.$2.length){var c=this.$7(b);if(c.begin<=a)this.$4.push(c),b++;else break}this.$3=b};b.$9=function(a){this.$4=this.$4.filter(function(b){return b.end>a})};b.invalidateCache=function(){this.$5=0,this.$4=[],this.$3=0};b.setStyle=function(a){this.$6=a};b.getSubtitles=function(a){a<this.$5&&this.invalidateCache();this.$5=a;this.$8(a);this.$9(a);return this.$4.reduce(function(a,b){return a.concat(b.text)},[])};b.renderVTT=function(){return q(this.$1,this.$6)};return a}();f["default"]=a}),66);
__d("PCXVideo.react",["CometRelay","PCActionSpec","PCXVideo_rendererRef.graphql","SubRipText","XHRRequest","getCrossOriginTransport","react","stylex","useJSON"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));e=j;var l=e.useEffect,m=e.useState,n={video:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",$$css:!0},videoContainer:{height:"xqtp20y",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0}};function a(a){var e,f=a.hscrollChildStyleProps;a=a.rendererRef;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXVideo_rendererRef.graphql"),a);var g=a.action;a=a.content;a=c("useJSON")((a=a)!=null?a:"{}");var j=(e=a.caption)==null?void 0:e.uri,o=a.source_uri;e=a.thumbnail_src;var p=m(null),q=p[0],r=p[1],s=d("PCActionSpec").usePressablePropsFromPCAction({action$key:g}).onPress;l(function(){if(o===null||j===null)return;new(c("XHRRequest"))(j).setTransportBuilder(c("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a){a=new(c("SubRipText"))(a);a=new Blob([a.renderVTT()],{type:"text/vtt"});r(URL.createObjectURL(a))}).send()},[j,o]);return o===null?null:k.jsx("div",{className:(i||(i=c("stylex")))(f&&n.videoContainer),style:{paddingTop:(f==null?void 0:f.aspectRatio)!=null?f.aspectRatio*100+"%":null},children:k.jsxs("video",{className:i(f&&n.video),controls:!0,onPlay:function(){s&&s()},poster:e,width:"100%",children:[k.jsx("source",{src:o,type:"video/mp4"}),q!=null?k.jsx("track",{kind:"subtitles",label:(p=a.caption)==null?void 0:p.locale_label,src:q}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXVideo_rendererRef$normalization.graphql",["cr:3010"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3010")}),null);/*FB_PKG_DELIM*/
__d("PCXPolicyAccordionCardChild_rendererRef.graphql",["cr:6633"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:6633")}),null);
__d("PCXPolicyAccordionCard_rendererRef.graphql",["cr:2804"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:2804")}),null);
__d("PCXPolicyBulletedList_rendererRef.graphql",["cr:6634"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:6634")}),null);
__d("PCXPolicyBulletedList.react",["CDSBulletedList.react","CometRelay","PCTextSpan.react","PCXPolicyBulletedList_rendererRef.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.rendererRef;a=a.xstyle;e=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXPolicyBulletedList_rendererRef.graphql"),e);e=(e=e.bullets_xcs_text)==null?void 0:e.map(function(a,b){return j.jsx("span",{children:a==null?void 0:(a=a.spans)==null?void 0:a.map(function(a,b){return j.jsx(c("PCTextSpan.react"),{textRendererRef:a},b)})},b)});return j.jsx(c("CDSBulletedList.react"),{xstyle:a,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXPolicyText_rendererRef.graphql",["cr:6635"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:6635")}),null);
__d("PCXPolicyText.react",["CDSText.react","CometRelay","PCCDSTextUtils","PCTextSpan.react","PCXPolicyText_rendererRef.graphql","react","useJSON"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e,f=a.rendererRef;a=a.xstyle;f=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXPolicyText_rendererRef.graphql"),f);var g=f.content;f=f.text;g=c("useJSON")((g=g)!=null?g:"{}");var i=d("PCCDSTextUtils").convertColorEnumFromBloksToComet(g.color);e=d("PCCDSTextUtils").convertTextStyleEnumFromBloksToComet(g.text_style,(e=g.is_emphasized)!=null?e:!1);var k=d("PCCDSTextUtils").convertTextAlignEnumFromBloksToComet(g.text_align);g=(f=(f=f==null?void 0:(f=f.spans)==null?void 0:f.map(function(a,b){return j.jsx(c("PCTextSpan.react"),{textRendererRef:a},b)}))!=null?f:g==null?void 0:g.text)!=null?f:"";return j.jsx(c("CDSText.react"),{color:i,textAlign:k,textStyle:e,xstyle:a,children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXPolicyAccordionCard.react",["ix","CDSAccordionListCard.react","CDSAccordionListCell.react","CDSImage.react","CometRelay","PCXPolicyAccordionCardChild_rendererRef.graphql","PCXPolicyAccordionCard_rendererRef.graphql","PCXPolicyBulletedList.react","PCXPolicyText.react","react","unrecoverableViolation","useJSON"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||d("react"),m={child:{marginBottom:"x1yztbdb",$$css:!0}};function a(a){a=a.rendererRef;a=d("CometRelay").useFragment(i!==void 0?i:i=b("PCXPolicyAccordionCard_rendererRef.graphql"),a);var e=a.accordion_card_body;a=a.content;a=c("useJSON")((a=a)!=null?a:"{}");a=a.title;return l.jsx("div",{className:"xc1cqh8 xkmajd7 x8g6ph x1azt60i x6ikm8r x10wlt62",children:l.jsx(c("CDSAccordionListCard.react"),{children:l.jsx(c("CDSAccordionListCell.react"),{addOnStart:l.jsx(c("CDSImage.react"),{src:h("354570")}),title:(a=a)!=null?a:"",children:e.map(function(a,b){return l.jsx(n,{rendererRef:a,xstyle:b<e.length-1&&m.child},b)})})})})}a.displayName=a.name+" [from "+f.id+"]";function n(a){var e=a.rendererRef;a=a.xstyle;e=d("CometRelay").useFragment(j!==void 0?j:j=b("PCXPolicyAccordionCardChild_rendererRef.graphql"),e);switch(e.__typename){case"PCXBulletedList":return l.jsx(c("PCXPolicyBulletedList.react"),{rendererRef:e,xstyle:a});case"PCXText":return l.jsx(c("PCXPolicyText.react"),{rendererRef:e,xstyle:a});default:throw c("unrecoverableViolation")("Unsupported child type: "+e.__typename,"privacy_center")}}n.displayName=n.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXPolicyAccordionCard_rendererRef$normalization.graphql",["cr:2794"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:2794")}),null);
__d("PCXTableCellContainer_item.graphql",["cr:3013"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3013")}),null);
__d("PCXTable_rendererRef.graphql",["cr:2564"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:2564")}),null);
__d("PCXTable.react",["CometPlaceholder.react","CometRelay","FDSListCell.react","FDSTextPairing.react","PCXTableCellContainer_item.graphql","PCXTable_rendererRef.graphql","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l=k||d("react"),m={bottomMargin:{marginBottom:"xieb3on",$$css:!0}};function a(a){var c;a=a.rendererRef;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXTable_rendererRef.graphql"),a);var e=a.data_rows;a=a.header_row;var f=(c=a==null?void 0:a.cells.length)!=null?c:1;c=a==null?void 0:a.cells.map(function(a,b){if(a.content==null)return null;var c=a.content.map(function(b,c){return l.jsx(n,{item:b,last:c===a.content.length-1},c)});return l.jsx("th",{className:"x1mwwwfo x10t1j1p x14d3j7x xrt222 x1aiskm x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x2b8uid",children:c},b)});a=e.map(function(a,b){var c=a.cells.map(function(b,c){if(b.content==null)return null;var d=b.content.map(function(a,c){return l.jsx(n,{item:a,last:c===b.content.length-1},c)});return b.is_header===!0?l.jsx("th",{className:"x1mwwwfo x10t1j1p x14d3j7x xrt222 x1aiskm x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x2b8uid",colSpan:a.cells.length===1?f:1,children:d},c):l.jsx("td",{className:"x1mwwwfo x10t1j1p x14d3j7x xrt222 x1aiskm x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1sxyh0 xurb0ha x1i9suas x1cnzs8 xx6bls6 x16dsc37",children:d},c)});return l.jsx("tr",{children:c},b)});return l.jsx("div",{className:"xw2csxc",children:l.jsx("div",{className:"x1gvwcb",children:l.jsxs("table",{className:"x1mwwwfo x10t1j1p x14d3j7x xrt222 x1aiskm x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1y1aw1k x1sxyh0 xwib8y2 xurb0ha",children:[c!=null&&l.jsx("thead",{children:l.jsx("tr",{children:c})}),l.jsx("tbody",{children:a})]})})})}a.displayName=a.name+" [from "+f.id+"]";function n(a){var e=a.item;a=a.last;e=d("CometRelay").useFragment(i!==void 0?i:i=b("PCXTableCellContainer_item.graphql"),e);if(e==null)return null;a=l.jsx("div",{className:(j||(j=c("stylex")))(!a&&m.bottomMargin),"data-testid":void 0,children:l.jsx(d("CometRelay").MatchContainer,{fallback:l.jsx(c("FDSListCell.react"),{content:l.jsx(c("FDSTextPairing.react"),{body:"Some descriptions",headline:"This is a PCTableCell",level:2})}),match:e})});return l.jsx(c("CometPlaceholder.react"),{fallback:null,children:a})}n.displayName=n.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXTable_rendererRef$normalization.graphql",["cr:3209"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3209")}),null);/*FB_PKG_DELIM*/
__d("CDSAlertBannerImpl.react",["fbt","CDSIcon.react","CDSTextPairing.react","CometColumn.react","CometColumnItem.react","CometPressable.react","CometRow.react","CometRowItem.react","MetaBrandXFilled24.svg.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k={contentContainer:{paddingTop:"x1cnzs8",paddingEnd:"xc73u3c",paddingBottom:"xx6bls6",paddingStart:"x5ib6vp",$$css:!0},contentContainerWithCloseButton:{paddingLeft:"x5tiur9",paddingStart:null,paddingEnd:null,paddingRight:"x1xpa7k",$$css:!0},iconWithTitle:{marginTop:"x1rdy4ex",$$css:!0},root:{borderTopColor:"x1s9qjmn",borderEndColor:"x39innc",borderBottomColor:"x7gj0x1",borderStartColor:"x1mpseq2",borderTopStartRadius:"xyqycrx",borderTopEndRadius:"xmzegnl",borderBottomEndRadius:"xd2n192",borderBottomStartRadius:"x10h4zbn",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},rowItem:{width:"xh8yej3",$$css:!0}};function a(a){var b=a.addOnPrimary,d=a.body,e=a.headline,f=a.icon,g=a.onClose;a=a.withCloseButton;f=j.jsxs(c("CometColumn.react"),{xstyle:[a!==!0&&k.root,k.contentContainer,a===!0&&k.contentContainerWithCloseButton],children:[j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,verticalAlign:"center",children:[f!=null?j.jsx(c("CometRowItem.react"),{verticalAlign:"top",xstyle:e!=null&&k.iconWithTitle,children:f}):null,j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("CDSTextPairing.react"),{contentText:d,headlineText:e,textPairingStyle:"headline3Body"})})]}),b!=null?j.jsx(c("CometRow.react"),{paddingHorizontal:0,children:j.jsx(c("CometRowItem.react"),{xstyle:k.rowItem,children:b})}):null]});return a===!0&&g!=null?j.jsxs(c("CometRow.react"),{expanding:!0,paddingHorizontal:0,paddingVertical:0,spacing:0,xstyle:k.root,children:[j.jsx(c("CometRowItem.react"),{expanding:!0,children:f}),j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometColumn.react"),{paddingHorizontal:12,paddingVertical:12,children:j.jsx(c("CometColumnItem.react"),{children:j.jsx(c("CometPressable.react"),{"aria-label":h._("Close"),onPress:g,children:j.jsx(c("CDSIcon.react"),{icon:c("MetaBrandXFilled24.svg.react"),size:13})})})})})]}):f}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CDSAlertBanner.react",["CDSAlertBannerImpl.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");a=function(a){return i.jsx(c("CDSAlertBannerImpl.react"),babelHelpers["extends"]({},a))};g["default"]=a}),98);
__d("MetaBrandIShieldOutline24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("path",{d:"M12 9.697c.483 0 .875.392.875.875V15.4a.875.875 0 1 1-1.75 0v-4.828c0-.483.392-.875.875-.875zM12 8.423c.833 0 1.25-.404 1.25-1.011 0-.607-.417-1.012-1.25-1.012s-1.25.405-1.25 1.012.417 1.011 1.25 1.011z"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.73 4.594c-.45.25-.73.725-.73 1.241v4.104a12 12 0 0 0 6.172 10.49l1.857 1.031a2 2 0 0 0 1.942 0l1.857-1.031A12 12 0 0 0 21 9.939V5.835c0-.516-.28-.99-.73-1.24a17.033 17.033 0 0 0-16.54 0zM19 6.181a15.034 15.034 0 0 0-14 0v3.758a10 10 0 0 0 5.144 8.741L12 19.712l1.856-1.032A10 10 0 0 0 19 9.94V6.18z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("TwoStepVerificationRoot.entrypoint",["JSResourceForInteraction","TwoStepVerificationRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b;return{extraProps:{encryptedContext:(b=(b=a.routeParams)==null?void 0:b.encrypted_context)!=null?b:a.encryptedContext,flow:(b=a.flow)!=null?b:(b=a.routeParams)==null?void 0:b.flow},queries:{query:{parameters:c("TwoStepVerificationRootQuery$Parameters"),variables:{encryptedContext:(b=(b=a.routeParams)==null?void 0:b.encrypted_context)!=null?b:a.encryptedContext,isLoginChallenges:a.flow==="login_challenges",isPreAuthentication:(a=a==null?void 0:(b=a.routeProps)==null?void 0:b.isPreAuthentication)!=null?a:!1}}}}},root:c("JSResourceForInteraction")("TwoStepVerificationRoot.react").__setRef("TwoStepVerificationRoot.entrypoint")};g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("PCXBanner_rendererRef$normalization.facebook.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={kind:"TypeDiscriminator",abstractKey:"__isXCSAction"},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d=[c],e={kind:"InlineFragment",selections:d,type:"XCSOpenUriAction",abstractKey:null},f={kind:"InlineFragment",selections:d,type:"XCSOpenPageAction",abstractKey:null},g={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"product_falco_event_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extra_data",storageKey:null}],type:"XCSLoggingAction",abstractKey:null},h={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"ref_id",storageKey:null}],type:"XCSNavigationScrollAction",abstractKey:null},i={kind:"InlineFragment",selections:d,type:"PCOpenLoginScreenAction",abstractKey:null};c=[c,{alias:null,args:null,kind:"ScalarField",name:"is_external",storageKey:null}];var j={kind:"InlineFragment",selections:c,type:"PCOpenUriAction",abstractKey:null},k={kind:"InlineFragment",selections:c,type:"PCOpenAccountsCenterAction",abstractKey:null},l={kind:"InlineFragment",selections:d,type:"PCOpenGuideAction",abstractKey:null},m={kind:"InlineFragment",selections:d,type:"XFBPCOpenGuidesAction",abstractKey:null},n={kind:"InlineFragment",selections:d,type:"XFBPCOpenControlsScreenAction",abstractKey:null},o={kind:"InlineFragment",selections:d,type:"XFBPCOpenResourcesScreenAction",abstractKey:null},p={kind:"InlineFragment",selections:c,type:"PCOpenPolicyAction",abstractKey:null},q={kind:"InlineFragment",selections:d,type:"PCOpenHomeAction",abstractKey:null},r={kind:"InlineFragment",selections:c,type:"PCOpenPlatformLinkAction",abstractKey:null},s={kind:"InlineFragment",selections:c,type:"PCOpenInterAppLinkAction",abstractKey:null},t={kind:"InlineFragment",selections:c,type:"PCOpenSeamlessLoginLinkAction",abstractKey:null},u={kind:"InlineFragment",selections:c,type:"PCOpenSeamlessLoginLinkIAWAction",abstractKey:null};c={kind:"InlineFragment",selections:c,type:"PCOpenAccountConfirmationInterstitialAction",abstractKey:null};var v={kind:"InlineFragment",selections:d,type:"PCPlaygroundNavigationAction",abstractKey:null},w={kind:"InlineFragment",selections:d,type:"PCOpenRoutedModalAction",abstractKey:null},x={kind:"InlineFragment",selections:d,type:"PCOpenIdentitySelectionAction",abstractKey:null},y={kind:"InlineFragment",selections:d,type:"PCOpenInterAppLinkAccountSelectorAction",abstractKey:null},z={alias:null,args:null,kind:"ScalarField",name:"parent_screen_logging_element",storageKey:null};z={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"entrypoint",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"properties",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"privacy_field_id",storageKey:null},z,{alias:null,args:null,kind:"ScalarField",name:"group_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"setting_value",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"group_subtitle",storageKey:null}],type:"XFBPCAudienceSelectorEntrypointProperties",abstractKey:null}],storageKey:null}],type:"PCOpenAudienceSelectorAction",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"properties",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"account_id",storageKey:null}],type:"XFBPCFBStoriesAudienceSelectorEntrypointProperties",abstractKey:null}],storageKey:null}],type:"XFBPCOpenFBStoriesAudienceSelectorAction",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"properties",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"stepper_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null},z],type:"XFBPCDialogStepperEntrypointProperties",abstractKey:null}],storageKey:null}],type:"XFBPCOpenStepperEntrypointAction",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"properties",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"account_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"identity_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"insight_type",storageKey:null},z],type:"XFBPCInsightEntrypointProperties",abstractKey:null}],storageKey:null}],type:"XFBPCOpenInsightAction",abstractKey:null}],type:"XFBPCOpenDialogEntrypointAction",abstractKey:"__isXFBPCOpenDialogEntrypointAction"};var A={kind:"InlineFragment",selections:d,type:"PCOpenUnifiedDYIAction",abstractKey:null},B={kind:"InlineFragment",selections:d,type:"PCOpenTYIAction",abstractKey:null},C={alias:null,args:null,kind:"ScalarField",name:"integration_point_id",storageKey:null},D={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_toast",storageKey:null},C],type:"PCToastAction",abstractKey:null};C={kind:"InlineFragment",selections:[C],type:"PCSurveyAction",abstractKey:null};d={kind:"InlineFragment",selections:d,type:"XFBPCOpenSearchAction",abstractKey:null};a=[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"spans",plural:!0,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action",plural:!1,selections:[a,b,e,f,g,h,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actions",plural:!0,selections:[a,b,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,c,v,w,x,y,z,A,B,D,C,d],storageKey:null}],type:"XCSMultiAction",abstractKey:null},i,j,k,l,m,n,o,p,q,r,s,t,u,c,v,w,x,y,z,A,B,D,C,d],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null}],type:"PCTextSpanRenderer",abstractKey:null}],storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"PCXBanner_rendererRef$normalization",selections:[{alias:null,args:null,concreteType:"PCXIcon",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XCSText",kind:"LinkedField",name:"body",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"XCSText",kind:"LinkedField",name:"headline",plural:!1,selections:a,storageKey:null}]}}();e.exports=a}),null);
__d("PCXBanner_rendererRef.facebook.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"spans",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"PCTextSpan_textRendererRef"}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PCXBanner_rendererRef",selections:[{alias:null,args:null,concreteType:"PCXIcon",kind:"LinkedField",name:"icon",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PCXIcon_rendererRef"}],storageKey:null},{alias:null,args:null,concreteType:"XCSText",kind:"LinkedField",name:"body",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"XCSText",kind:"LinkedField",name:"headline",plural:!1,selections:a,storageKey:null}],type:"PCXBanner",abstractKey:null}}();e.exports=a}),null);/*FB_PKG_DELIM*/
__d("CDSAccordionListCard.react",["CDSCard.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children;a=a.role;a=a===void 0?"list":a;return i.jsx("div",{role:a,children:i.jsx(c("CDSCard.react"),{children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CDSAccordionListCell.react",["BaseRow.react","BaseRowItem.react","CDSDivider.react","CDSIcon.react","CDSText.react","CometPressable.react","MetaBrandCaretDownOutline24.svg.react","MetaBrandCaretUpOutline24.svg.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useId,k=b.useState,l={addonEndSpacing:{marginStart:"x16n37ib",marginLeft:null,marginRight:null,marginEnd:"xq8finb",$$css:!0},heading:{borderTopStartRadius:"x1aomrq0",borderTopEndRadius:"xcbc2j",borderBottomEndRadius:"xiv38d7",borderBottomStartRadius:"xhq3uy",paddingStart:"x1jm3xrc",paddingLeft:null,paddingRight:null,paddingEnd:"x9lpsdd",paddingTop:"xu40bym",paddingBottom:"x1fi3s4r",$$css:!0},startAddOnSpacing:{marginStart:"x16n37ib",marginLeft:null,marginRight:null,$$css:!0},title:{marginEnd:"xq8finb",marginLeft:null,marginRight:null,$$css:!0}},m=3;function a(a){var b=a.addOnEnd,d=a.addOnStart,e=a.badge,f=a.children,g=a.hasBottomDivider,h=a.initiallyExpanded;h=h===void 0?!1:h;var n=a.onToggle;a=a.title;h=k(h);var o=h[0],p=h[1];h=i.jsx(c("CDSIcon.react"),{color:"primary",icon:o?c("MetaBrandCaretUpOutline24.svg.react"):c("MetaBrandCaretDownOutline24.svg.react"),isDecorative:!0,size:16});var q=j(),r=function(){p(!o),n&&n(!o)};return i.jsxs(i.Fragment,{children:[i.jsx("div",{"aria-level":"3",role:"heading",children:i.jsx(c("CometPressable.react"),{"aria-controls":q,"aria-expanded":o,"aria-label":a,expanding:!0,onPress:r,role:"button",xstyle:l.heading,children:i.jsxs(c("BaseRow.react"),{expanding:!0,verticalAlign:"center",children:[d?i.jsx(c("BaseRowItem.react"),{children:d}):null,i.jsx(c("BaseRow.react"),{expanding:!0,verticalAlign:"center",wrap:"forward",children:i.jsx(c("BaseRowItem.react"),{expanding:d!=null,xstyle:[l.title,d!=null&&l.startAddOnSpacing],children:i.jsxs("div",{children:[i.jsx(c("CDSText.react"),{maxLines:m,textStyle:"primaryLabel",children:a}),e!=null&&i.jsx("div",{className:"x1xmf6yo",children:e})]})})}),b!=null&&i.jsx(c("BaseRowItem.react"),{xstyle:l.addonEndSpacing,children:b}),i.jsx(c("BaseRowItem.react"),{children:h})]})})}),o&&i.jsx("div",{className:"x1fi3s4r x1jm3xrc",id:q,children:i.jsx("div",{className:"x8cjs6t x13fuv20 x178xt8z x9lpsdd xu40bym",children:f})}),g===!0&&i.jsx(c("CDSDivider.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CDSBulletedList.react",["BaseTextContext","CDSText.react","CDSTextConfig","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={li:{marginStart:"xovbk2j",position:"x1n2onr6",$$css:!0},spacing:{marginTop:"xw7yly9",$$css:!0},ul:{display:"x78zum5",flexDirection:"xdt5ytf",listStyleType:"x3ct3a4",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",$$css:!0}};b=c("CDSTextConfig").offsets("body");var l=b[0],m=b[1];function a(a){var b=a.children;a=a.xstyle;return j.jsx(c("CDSText.react"),{children:j.jsx(d("BaseTextContext").BaseTextContextProvider,{nested:!1,children:j.jsx("ul",{className:(h||(h=c("stylex")))(k.ul,a),children:j.Children.toArray(b).map(function(a,b,d){return j.jsxs("li",{className:(h||(h=c("stylex")))(k.li,b!==0&&k.spacing),style:{marginBottom:b===d.length-1?m:null,marginTop:b===0?l:null},children:[j.jsx("span",{"aria-hidden":!0,className:"xozk6tg x10l6tqk",children:j.jsx(c("CDSText.react"),{children:"\u2022"})}),j.jsx(c("CDSText.react"),{children:a})]},b)})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXBanner_rendererRef.graphql",["cr:3397"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3397")}),null);
__d("PCXBanner.react",["CDSAlertBanner.react","CDSText.react","CometRelay","PCTextSpan.react","PCXBanner_rendererRef.graphql","PCXIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){a=a.rendererRef;a=d("CometRelay").useFragment(h!==void 0?h:h=b("PCXBanner_rendererRef.graphql"),a);var e=a.body,f=a.headline;a=a.icon;f=(f==null?void 0:(f=f.spans)==null?void 0:f.map(function(a,b){return j.jsx(c("PCTextSpan.react"),{textRendererRef:a},b)}))||null;f=f!=null?j.jsx(c("CDSText.react"),{children:f}):void 0;e=(e==null?void 0:(e=e.spans)==null?void 0:e.map(function(a,b){return j.jsx(c("PCTextSpan.react"),{textRendererRef:a},b)}))||null;e=e!=null?j.jsx(c("CDSText.react"),{children:e}):void 0;a=a!=null?j.jsx(c("PCXIcon.react"),{rendererRef:a}):void 0;return j.jsx("div",{className:"x1yztbdb",children:j.jsx(c("CDSAlertBanner.react"),{body:e,headline:f,icon:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PCXBanner_rendererRef$normalization.graphql",["cr:3868"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:3868")}),null);