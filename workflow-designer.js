!function(){"use strict";var t={654:function(t,e,i){var n=i(136);window.DesignerHost=n.DesignerHost},454:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Activity=void 0;var n=i(147),o=i(440),s=i(176),r=i(308),c=i(397),a=function(){function t(t){var e=this;this.view=new h(this),this.isSelected=!1,this.position=new o.Vector(t.left,t.top),this.name=t.name,this.update(t),this.inputConnectors=t.inputNames.map((function(t){return new s.Connector(e,t,s.ConnectorDirection.input)})),this.outputConnectors=t.outputNames.map((function(t){return new s.Connector(e,t,s.ConnectorDirection.output)}))}return t.prototype.update=function(t){this.label=t.label,this.color=t.color,this.isInvalid=t.isInvalid,this.canDelete=t.canDelete},t.prototype.deleteConnections=function(){for(var t=0,e=this.inputConnectors;t<e.length;t++)e[t].disconnectAndDeleteConnections();for(var i=0,n=this.outputConnectors;i<n.length;i++)n[i].disconnectAndDeleteConnections()},t.prototype.getInputConnector=function(t){return u(this.inputConnectors,t)},t.prototype.getOutputConnector=function(t){return u(this.outputConnectors,t)},t.prototype.getDefinition=function(){return{name:this.name,label:this.label,color:this.color,left:this.position.x,top:this.position.y,isInvalid:this.isInvalid,canDelete:!1,inputNames:this.inputConnectors.map((function(t){return t.name})),outputNames:this.outputConnectors.map((function(t){return t.name}))}},t.prototype.checkClick=function(t){for(var e=0,i=this.inputConnectors;e<i.length;e++){var n=i[e];if(n.view.hasElement(t))return{type:c.InteractionType.moveOutputConnection,connector:n}}for(var o=0,s=this.outputConnectors;o<s.length;o++){var r=s[o];if(r.view.hasElement(t))return{type:c.InteractionType.moveInputConnection,connector:r}}return this.view.hasElement(t)?{type:c.InteractionType.moveActivity,activity:this}:null},t}();e.Activity=a;var h=function(){function t(t){this.state=t}return t.prototype.createView=function(t){var e=this;this.container=n.createSvgElement("g"),this.rect=n.createSvgElement("rect",{class:"wfd-activity-rect",rx:3,ry:3}),this.label=n.createSvgElement("text",{class:"wfd-activity-text","text-anchor":"middle",style:"dominant-baseline: middle;"}),this.warnIconLayer=n.createSvgElement("path",{class:"wfd-activity-invalid-icon",d:"M16.250354835727876,10.168772928176395 l-5.056659148817744,-8.428335140644094 C10.529966431681714,0.634508051022209 9.514699966675266,0.0015702244475335192 8.406203782735133,0.0015702244475335192 s-2.123762648946581,0.6329376780620066 -2.787491904174999,1.7371572911905275 l-5.056659148817744,8.43004600658901 c-0.6722824711079767,1.119615475968061 -0.7458400534158471,2.313643818703781 -0.20100048034921159,3.2758802710006307 C0.9050367978971963,14.407746272547683 1.9673458388567155,14.960283498572835 3.2742766312026106,14.960283498572835 h10.263854303065045 c1.306930792345895,0 2.3692396847927455,-0.5525375230504892 2.9132239177073416,-1.51477382683467 C16.996193775298707,12.483272773903309 16.92263723257952,11.289243985629582 16.250354835727876,10.168772928176395 zM8.406203782735133,12.008569255459633 c-0.7304442648326415,0 -1.3257477930245898,-0.5944482437321597 -1.3257477930245898,-1.32489265707747 c0,-0.7312996235487645 0.5944482437321597,-1.3266032259970473 1.3257477930245898,-1.3266032259970473 s1.3257477930245898,0.5953035653201155 1.3257477930245898,1.3266032259970473 C9.73195202129773,11.414120566189467 9.136648493105781,12.008569255459633 8.406203782735133,12.008569255459633 zM9.802943453200896,5.658664756728626 c-0.009408533406621289,0.026514957624079738 -1.198305062060001,2.96625393041694 -1.198305062060001,2.96625393041694 c-0.03250220409874993,0.08040019213968463 -0.11119175074201237,0.133430112028865 -0.1975792125614717,0.133430112028865 s-0.16507699221914862,-0.053029915248159476 -0.1975792125614717,-0.133430112028865 l-1.1897518461804424,-2.9405942085219294 C6.94274865712714,5.485035031296093 6.9093915236067005,5.305417275056357 6.9093915236067005,5.124089246922381 c0,-0.8253849239675759 0.671427186648188,-1.496812110615764 1.496812110615764,-1.496812110615764 s1.496812110615764,0.671427186648188 1.496812110615764,1.496812110615764 C9.903016041863566,5.305417275056357 9.869658908343126,5.485035031296093 9.802943453200896,5.658664756728626 z"}),this.container.appendChild(this.rect),this.container.appendChild(this.label),this.container.appendChild(this.warnIconLayer),this.state.inputConnectors.forEach((function(t){return t.view.createView(e.container)})),this.state.outputConnectors.forEach((function(t){return t.view.createView(e.container)})),this.parent=t,this.parent.appendChild(this.container)},t.prototype.updateView=function(){this.label.textContent=this.state.label;var t=this.state.inputConnectors.length*r.CONNECTOR_WIDTH,e=this.state.outputConnectors.length*r.CONNECTOR_WIDTH,i=this.label.getBBox().width,s=i+r.ACTIVITY_LABEL_PADDING_X,c=Math.max(t,e,s,r.ACTIVITY_MIN_WIDTH),a=(c-t)/2,h=(c-e)/2,u=r.ACTIVITY_HEIGHT/2+r.CONNECTOR_HEIGHT/2;if(n.setAttrs(this.rect,{y:r.CONNECTOR_HEIGHT/2,fill:this.state.color,width:c,height:r.ACTIVITY_HEIGHT,stroke:this.state.isSelected?"#FFF":this.state.color}),n.setAttrs(this.label,{x:c/2,y:u}),this.state.isInvalid){var d=(c-i)/4;n.setAttrs(this.warnIconLayer,{transform:"translate("+(d-r.ACTIVITY_INVALID_ICON_WIDTH/2)+", "+(u-r.ACTIVITY_INVALID_ICON_HEIGHT/2)+")",visibility:"visible"})}else n.setAttrs(this.warnIconLayer,{visibility:"collapse"});for(var l=0;l<this.state.inputConnectors.length;l++)this.state.inputConnectors[l].position=new o.Vector(r.CONNECTOR_WIDTH*l+a,0),this.state.inputConnectors[l].view.updateView();for(var p=0;p<this.state.outputConnectors.length;p++)this.state.outputConnectors[p].position=new o.Vector(r.CONNECTOR_WIDTH*p+h,r.ACTIVITY_HEIGHT),this.state.outputConnectors[p].view.updateView();this.updatePostionOfView()},t.prototype.updatePostionOfView=function(){this.container.setAttribute("transform","translate("+this.state.position.x+", "+this.state.position.y+")")},t.prototype.updateConnectionViews=function(){this.state.inputConnectors.forEach((function(t){return t.view.updateConnectionViews()})),this.state.outputConnectors.forEach((function(t){return t.view.updateConnectionViews()}))},t.prototype.deleteView=function(){this.parent.removeChild(this.container)},t.prototype.deleteConnectionViews=function(){this.state.inputConnectors.forEach((function(t){return t.view.deleteConnectionViews()})),this.state.outputConnectors.forEach((function(t){return t.view.deleteConnectionViews()}))},t.prototype.hasElement=function(t){return n.isChildOf(this.container,t)},t}();function u(t,e){var i=n.tryFind(t,(function(t){return t.name===e}));if(!i)throw new Error("Cannot find "+e+" connector.");return i}},7:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Connection=void 0;var n=i(147),o=i(308),s=function(){function t(t,e,i){if(this.outputConnector=t,this.inputConnector=e,this.position=i,this.view=new r(this),!t&&!e)throw new Error("The connection must have minimum one connector.")}return t.prototype.requireTwoConnectors=function(){if(!this.inputConnector||!this.outputConnector)throw new Error("This operation requires two connectors.")},t.prototype.getDefinition=function(){return this.requireTwoConnectors(),{inputActivityName:this.inputConnector.activity.name,inputName:this.inputConnector.name,outputActivityName:this.outputConnector.activity.name,outputName:this.outputConnector.name}},t}();e.Connection=s;var r=function(){function t(t){this.state=t,this.isLabelVisible=!1}return t.prototype.createView=function(t){this.line=n.createSvgElement("line",{class:"wfd-connection-line","stroke-width":o.CONNECTION_STROKE_WIDTH}),this.circle=n.createSvgElement("circle",{class:"wfd-connection-start",r:o.CONNECTION_END_SIZE/2});var e=o.CONNECTION_END_SIZE/3,i=o.CONNECTION_END_SIZE/Math.sqrt(3);this.arrow=n.createSvgElement("path",{class:"wfd-connection-end",d:"M -"+i+" -"+e+" L "+i+" -"+e+" L 0 "+2*e+" z"}),this.labelRect=n.createSvgElement("rect",{class:"wfd-connection-label-rect",visibility:"hidden",rx:3,ry:3}),this.labelText=n.createSvgElement("text",{class:"wfd-connection-label-text","text-anchor":"middle",style:"dominant-baseline: middle;",visibility:"hidden"}),this.labelText.textContent="test",this.parent=t,this.parent.appendChild(this.line),this.parent.appendChild(this.circle),this.parent.appendChild(this.arrow),this.parent.appendChild(this.labelRect),this.parent.appendChild(this.labelText)},t.prototype.deleteView=function(){this.parent.removeChild(this.line),this.parent.removeChild(this.circle),this.parent.removeChild(this.arrow),this.parent.removeChild(this.labelRect),this.parent.removeChild(this.labelText)},t.prototype.updateView=function(){var t=this.state.outputConnector?this.state.outputConnector.getPosition():this.state.position,e=this.state.inputConnector?this.state.inputConnector.getPosition():this.state.position,i=t.angleRad(e)-270;if(n.setAttrs(this.line,{x1:t.x,y1:t.y,x2:e.x,y2:e.y}),n.setAttrs(this.circle,{cx:t.x,cy:t.y}),n.setAttrs(this.arrow,{transform:"translate("+e.x+", "+e.y+") rotate("+i+")"}),this.state.outputConnector&&(t.distance(e)>o.CONNECTION_LABEL_MIN_DISTANCE?this.isLabelVisible||(this.labelText.innerHTML=this.state.outputConnector.name,n.setAttrs(this.labelText,{visibility:"visible"}),n.setAttrs(this.labelRect,{visibility:"visible"}),this.isLabelVisible=!0):this.isLabelVisible&&(n.setAttrs(this.labelText,{visibility:"hidden"}),n.setAttrs(this.labelRect,{visibility:"hidden"}),this.isLabelVisible=!1),this.isLabelVisible)){var s=(t.x+e.x)/2,r=(t.y+e.y)/2;n.setAttrs(this.labelText,{x:s,y:r});var c=this.labelText.getBBox(),a=c.width+10,h=c.height+6;n.setAttrs(this.labelRect,{width:a,height:h,x:s-a/2,y:r-h/2})}},t}()},176:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.ConnectorDirection=e.Connector=void 0;var n=i(147),o=i(440),s=i(308),r=function(){function t(t,e,i){this.activity=t,this.name=e,this.direction=i,this.view=new a(this),this.connections=[],this.position=null}return t.prototype.addConnection=function(t){this.connections.push(t)},t.prototype.disconnectAndDeleteConnections=function(){for(var t=0,e=this.connections;t<e.length;t++){var i=e[t];switch(i.requireTwoConnectors(),this.direction){case c.input:i.outputConnector.deleteConnection(i);break;case c.output:i.inputConnector.deleteConnection(i)}}this.connections.length=0},t.prototype.deleteConnection=function(t){var e=this.connections.indexOf(t);if(e<0)throw new Error("Cannot find connection.");this.connections.splice(e,1)},t.prototype.getPosition=function(){if(!this.position)throw new Error("This operation requires defined position.");return this.activity.position.add(this.position).add(new o.Vector(s.CONNECTOR_WIDTH,s.CONNECTOR_HEIGHT).divideConst(2))},t}();e.Connector=r;var c,a=function(){function t(t){this.state=t}return t.prototype.createView=function(t){this.circle=n.createSvgElement("circle",{class:"wfd-connector",visibility:"hidden"}),t.appendChild(this.circle)},t.prototype.updateView=function(){if(this.state.position){var t=s.CONNECTOR_HEIGHT/2,e=(s.CONNECTOR_WIDTH-2*t)/2;n.setAttrs(this.circle,{visibility:"visible",cx:""+(this.state.position.x+t+e),cy:""+(this.state.position.y+t),r:""+t})}},t.prototype.updateConnectionViews=function(){this.state.connections.forEach((function(t){return t.view.updateView()}))},t.prototype.deleteConnectionViews=function(){this.state.connections.forEach((function(t){return t.view.deleteView()}))},t.prototype.hasElement=function(t){return n.isChildOf(this.circle,t)},t}();!function(t){t[t.input=1]="input",t[t.output=2]="output"}(c=e.ConnectorDirection||(e.ConnectorDirection={}))},308:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.CONNECTION_LABEL_MIN_DISTANCE=e.CONNECTION_END_SIZE=e.CONNECTION_STROKE_WIDTH=e.CONNECTOR_HEIGHT=e.CONNECTOR_WIDTH=e.ACTIVITY_INVALID_ICON_HEIGHT=e.ACTIVITY_INVALID_ICON_WIDTH=e.ACTIVITY_LABEL_PADDING_X=e.ACTIVITY_HEIGHT=e.ACTIVITY_MIN_WIDTH=e.GRID_SIZE=e.DESIGNER_SCALE_STEP=e.DESIGNER_MAX_SCALE=e.DESIGNER_MIN_SCALE=void 0,e.DESIGNER_MIN_SCALE=.3,e.DESIGNER_MAX_SCALE=2,e.DESIGNER_SCALE_STEP=.15,e.GRID_SIZE=20,e.ACTIVITY_MIN_WIDTH=90,e.ACTIVITY_HEIGHT=40,e.ACTIVITY_LABEL_PADDING_X=60,e.ACTIVITY_INVALID_ICON_WIDTH=17,e.ACTIVITY_INVALID_ICON_HEIGHT=15,e.CONNECTOR_WIDTH=24,e.CONNECTOR_HEIGHT=18,e.CONNECTION_STROKE_WIDTH=5,e.CONNECTION_END_SIZE=11,e.CONNECTION_LABEL_MIN_DISTANCE=35},691:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Control=void 0;var n=i(147),o=function(){function t(t){this.designer=t,this.view=new s(this)}return t.prototype.onDeleteClicked=function(t){t.preventDefault();var e=this.designer.host.tryGetSelectedActivityName();this.designer.host.deleteActivity(e),this.selectedActivity=null,this.view.updateView()},t.prototype.onEditClicked=function(t){t.preventDefault();var e=this.designer.host.tryGetSelectedActivityName();e&&this.designer.host.onEditRequested.fire(e)},t.prototype.onCenterClicked=function(t){t.preventDefault(),this.designer.host.scrollToCenter()},t}();e.Control=o;var s=function(){function t(t){this.state=t}return t.prototype.createView=function(t){var e=this;this.bar=document.createElement("div"),this.bar.className="wfd-bar",this.activityBar=document.createElement("span"),this.activityBar.classList.add("wfd-bar-activity"),this.activityBar.classList.add("hidden"),this.deleteButton=r("4 4 16 16","M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0 c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6 C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z","danger"),this.activityBar.appendChild(this.deleteButton);var i=r("0 0 24 24","M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z","secondary");this.activityBar.appendChild(i),t.appendChild(this.bar);var n=r("0 0 20 20","M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z","secondary");this.activityBar.appendChild(this.deleteButton),this.activityBar.appendChild(i),this.bar.appendChild(this.activityBar),this.bar.appendChild(n),t.appendChild(this.bar),this.deleteButton.addEventListener("click",(function(t){return e.state.onDeleteClicked(t)})),i.addEventListener("click",(function(t){return e.state.onEditClicked(t)})),n.addEventListener("click",(function(t){return e.state.onCenterClicked(t)}))},t.prototype.updateView=function(){this.state.selectedActivity?(this.state.selectedActivity.canDelete&&!this.state.designer.isReadOnly?this.deleteButton.classList.remove("hidden"):this.deleteButton.classList.add("hidden"),this.activityBar.classList.remove("hidden")):this.activityBar.classList.add("hidden")},t}();function r(t,e,i){var o=n.createSvgElement("svg",{viewBox:t});o.appendChild(n.createSvgElement("path",{d:e,class:"wfd-bar-button-icon"}));var s=document.createElement("button");return s.className="wfd-bar-button "+i,s.appendChild(o),s}},222:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Designer=void 0;var n=i(147),o=i(440),s=i(308),r=i(691),c=i(153),a=i(397),h=i(975),u=i(84),d=i(72),l=i(628),p=function(){function t(t){this.host=t,this.view=new v(this),this.control=new r.Control(this),this.activities=[],this.isReadOnly=!1,this.scale=1,this.scrollPosition=new o.Vector(0,0),this.action=null}return t.prototype.getActivity=function(t){var e=n.tryFind(this.activities,(function(e){return e.name===t}));if(!e)throw new Error("Cannot find "+t+" activity.");return e},t.prototype.tryGetSelectedActivity=function(){return n.tryFind(this.activities,(function(t){return t.isSelected}))},t.prototype.getUniqueConnections=function(){var t=[];return this.activities.forEach((function(e){e.inputConnectors.concat(e.outputConnectors).forEach((function(e){e.connections.forEach((function(e){t.indexOf(e)<0&&t.push(e)}))}))})),t},t.prototype.checkClick=function(t){for(var e=0,i=this.activities;e<i.length;e++){var n=i[e].checkClick(t);if(n)return n}return this.view.hasElement(t)?{type:a.InteractionType.scroll}:null},t.prototype.onDoubleClick=function(t){t.preventDefault(),c.doubleClickAction(t,this)},t.prototype.onWheel=function(t){l.wheelAction(t,this)},t.prototype.onMouseDown=function(t){t.preventDefault(),this.startAction(a.readMouseEvent(t))},t.prototype.onMouseMove=function(t){t.preventDefault(),this.moveAction(a.readMouseEvent(t))},t.prototype.onMouseUp=function(t){t.preventDefault(),this.finishAction(a.readMouseEvent(t))},t.prototype.onTouchStart=function(t){t.preventDefault(),this.startAction(a.readTouchEvent(t))},t.prototype.onTouchMove=function(t){t.preventDefault(),this.moveAction(a.readTouchEvent(t))},t.prototype.onTouchEnd=function(t){t.preventDefault(),this.finishAction(a.readTouchEvent(t))},t.prototype.startAction=function(t){if(this.action)return this.view.unbindGlobalMouseEvents(),this.action.finish(t),void(this.action=null);var e=this.checkClick(t.target);if(e){switch(this.view.bindGlobalMouseEvents(),e.type){case a.InteractionType.moveActivity:this.isReadOnly||(this.action=new h.MoveActivityAction(e,this));break;case a.InteractionType.moveOutputConnection:case a.InteractionType.moveInputConnection:this.isReadOnly||(this.action=new u.MoveConnectionAction(e,this));break;case a.InteractionType.scroll:this.action=new d.ScrollAction(this)}this.action&&this.action.start(t)}},t.prototype.moveAction=function(t){this.action&&this.action.move(t)},t.prototype.finishAction=function(t){this.action&&(this.view.unbindGlobalMouseEvents(),this.action.finish(t),this.action=null)},t}();e.Designer=p;var v=function(){function t(t){var e=this;this.state=t,this.lastGridSize=null,this.mouseMoveHandler=function(t){return e.state.onMouseMove(t)},this.mouseUpHandler=function(t){return e.state.onMouseUp(t)},this.touchMoveHandler=function(t){return e.state.onTouchMove(t)},this.touchEndHandler=function(t){return e.state.onTouchEnd(t)}}return t.prototype.createView=function(e,i){var o=this;window.addEventListener("resize",(function(){return o.onResized()})),this.container=document.createElement("div"),this.container.classList.add("wfd-designer"),this.container.classList.add("wfd-theme-"+i);var s="wfd-grid-"+t._nextGridPatternId++;this.gridPatternPath=n.createSvgElement("path",{fill:"none",class:"wfd-grid"}),this.gridPattern=n.createSvgElement("pattern",{id:s,patternUnits:"userSpaceOnUse"}),this.gridPattern.appendChild(this.gridPatternPath);var r=n.createSvgElement("defs",null);r.appendChild(this.gridPattern),this.root=n.createSvgElement("g"),this.activitiesLayer=n.createSvgElement("g"),this.connectionsLayer=n.createSvgElement("g",{style:"pointer-events: none;"}),this.root.appendChild(this.activitiesLayer),this.root.appendChild(this.connectionsLayer);var c=n.createSvgElement("rect",{width:"100%",height:"100%",fill:"url(#"+s+")"});this.svg=n.createSvgElement("svg"),this.svg.addEventListener("wheel",(function(t){return o.state.onWheel(t)})),this.svg.addEventListener("mousedown",(function(t){return o.state.onMouseDown(t)})),this.svg.addEventListener("touchstart",(function(t){return o.state.onTouchStart(t)})),this.svg.addEventListener("dblclick",(function(t){return o.state.onDoubleClick(t)})),this.svg.appendChild(r),this.svg.appendChild(n.createSvgElement("rect",{width:"100%",height:"100%",class:"wfd-grid-rect"})),this.svg.appendChild(c),this.svg.appendChild(this.root),this.container.appendChild(this.svg),this.state.control.view.createView(this.container),e.appendChild(this.container),this.updateSize(),this.updateViewPort(),this.updateIsReadonly()},t.prototype.updateSize=function(){var t=this.getSize();n.setAttrs(this.svg,{width:t.x,height:t.y})},t.prototype.updateViewPort=function(){var t=this.state.scrollPosition;n.setAttrs(this.root,{transform:"translate("+t.x+", "+t.y+") scale("+this.state.scale+")"}),n.setAttrs(this.gridPattern,{x:t.x,y:t.y});var e=this.state.scale*s.GRID_SIZE;this.lastGridSize!==e&&(this.lastGridSize=e,n.setAttrs(this.gridPattern,{width:e,height:e,transform:"scale("+this.state.scale+")"}),n.setAttrs(this.gridPatternPath,{d:"M "+e+" 0 L 0 0 0 "+e}))},t.prototype.updateIsReadonly=function(){this.state.isReadOnly?this.container.classList.remove("wfd-editable"):this.container.classList.add("wfd-editable")},t.prototype.bindGlobalMouseEvents=function(){document.body.addEventListener("mousemove",this.mouseMoveHandler),document.body.addEventListener("mouseup",this.mouseUpHandler),document.body.addEventListener("touchmove",this.touchMoveHandler),document.body.addEventListener("touchend",this.touchEndHandler)},t.prototype.unbindGlobalMouseEvents=function(){document.body.removeEventListener("mousemove",this.mouseUpHandler),document.body.removeEventListener("mouseup",this.mouseUpHandler),document.body.removeEventListener("touchmove",this.touchMoveHandler),document.body.removeEventListener("touchend",this.touchEndHandler)},t.prototype.hasElement=function(t){return n.isChildOf(this.svg,t)},t.prototype.getSize=function(){var t=this.container.parentElement;return new o.Vector(t.offsetWidth,t.offsetHeight)},t.prototype.onResized=function(){this.updateSize()},t._nextGridPatternId=0,t}()},153:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.doubleClickAction=void 0;var n=i(397);e.doubleClickAction=function(t,e){var i=e.checkClick(t.target);i&&i.type===n.InteractionType.moveActivity&&!this.isReadOnly&&e.host.onEditRequested.fire(i.activity.name)}},397:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.readTouchEvent=e.readMouseEvent=e.InteractionType=void 0;var n,o=i(440);(n=e.InteractionType||(e.InteractionType={}))[n.moveOutputConnection=1]="moveOutputConnection",n[n.moveInputConnection=2]="moveInputConnection",n[n.moveActivity=3]="moveActivity",n[n.scroll=4]="scroll",e.readMouseEvent=function(t){return{position:new o.Vector(t.pageX,t.pageY),target:t.target}},e.readTouchEvent=function(t){if(t.touches.length>0){var e=t.touches[0];return{position:new o.Vector(e.pageX,e.pageY),target:document.elementFromPoint(e.pageX,e.pageY)}}return{position:null,target:null}}},975:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.MoveActivityAction=void 0;var i=function(){function t(t,e){this.info=t,this.designer=e,this.moved=!1}return t.prototype.start=function(t){this.offset=t.position.divideConst(this.designer.scale).subtract(this.info.activity.position),this.moved=!1},t.prototype.move=function(t){var e=t.position.divideConst(this.designer.scale).subtract(this.offset).round();this.info.activity.position=e,this.info.activity.view.updatePostionOfView(),this.info.activity.view.updateConnectionViews(),this.moved=!0},t.prototype.finish=function(){this.moved||this.designer.host.selectActivity(this.info.activity.name)},t}();e.MoveActivityAction=i},84:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.MoveConnectionAction=void 0;var n=i(7),o=i(397),s=function(){function t(t,e){this.info=t,this.designer=e}return t.prototype.start=function(t){var e=this.info.connector.getPosition();this.lastTarget=t.target,this.offset=t.position.divideConst(this.designer.scale).subtract(e),this.info.type===o.InteractionType.moveInputConnection?(this.info.connector.view.deleteConnectionViews(),this.info.connector.disconnectAndDeleteConnections(),this.connection=new n.Connection(this.info.connector,null,e)):this.connection=new n.Connection(null,this.info.connector,e),this.connection.view.createView(this.designer.view.connectionsLayer),this.connection.view.updateView(),this.info.connector.addConnection(this.connection)},t.prototype.move=function(t){var e=t.position.divideConst(this.designer.scale).subtract(this.offset);this.lastTarget=t.target,this.connection.position=e,this.connection.view.updateView()},t.prototype.finish=function(t){var e=this.designer.checkClick(t.target||this.lastTarget),i=this.info.type===o.InteractionType.moveOutputConnection?o.InteractionType.moveInputConnection:o.InteractionType.moveOutputConnection;e&&e.type===i&&e.connector.activity!==this.info.connector.activity?(this.info.type===o.InteractionType.moveOutputConnection?(e.connector.view.deleteConnectionViews(),e.connector.disconnectAndDeleteConnections(),this.connection.outputConnector=e.connector):this.connection.inputConnector=e.connector,e.connector.addConnection(this.connection),this.connection.view.updateView()):(this.info.connector.deleteConnection(this.connection),this.connection.view.deleteView())},t}();e.MoveConnectionAction=s},72:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollAction=void 0;var i=function(){function t(t){this.designer=t,this.moved=!1}return t.prototype.start=function(t){this.offset=t.position.subtract(this.designer.scrollPosition)},t.prototype.move=function(t){var e=t.position.subtract(this.offset);this.moved=!0,this.designer.scrollPosition=e,this.designer.view.updateViewPort()},t.prototype.finish=function(){this.moved||this.designer.isReadOnly||this.designer.host.tryUnselectActivity()},t}();e.ScrollAction=i},628:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.wheelAction=void 0;var n=i(308);e.wheelAction=function(t,e){var i=t.deltaY>0?n.DESIGNER_SCALE_STEP:-n.DESIGNER_SCALE_STEP,o=Math.max(n.DESIGNER_MIN_SCALE,Math.min(n.DESIGNER_MAX_SCALE,e.scale-i));e.scrollPosition=e.scrollPosition.multiplyConst(o/e.scale),e.scale=o,e.view.updateViewPort()}},136:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.DesignerHost=void 0;var n=i(454),o=i(7),s=i(222),r=i(139),c=i(147),a=i(440),h=function(){function t(t){this.config=t,this.designer=new s.Designer(this),this.onDeleted=new r.EventEmitter,this.onSelected=new r.EventEmitter,this.onUnselected=new r.EventEmitter,this.onEditRequested=new r.EventEmitter}return t.prototype.setup=function(){var t=this;this.designer.isReadOnly=!!this.config.isReadOnly,this.designer.view.createView(this.config.container,this.config.theme),this.onSelected.addListener((function(){t.designer.control.selectedActivity=t.designer.tryGetSelectedActivity(),t.designer.control.view.updateView()})),this.onUnselected.addListener((function(){t.designer.control.selectedActivity=null,t.designer.control.view.updateView()}))},t.prototype.addActivites=function(t){var e=this,i=t.map((function(t){var i=new n.Activity(t);return i.view.createView(e.designer.view.activitiesLayer),e.designer.activities.push(i),i}));setTimeout((function(){i.forEach((function(t){return t.view.updateView()}))}))},t.prototype.addConnections=function(t){var e=this,i=t.map((function(t){var i=e.designer.getActivity(t.outputActivityName).getOutputConnector(t.outputName),n=e.designer.getActivity(t.inputActivityName).getInputConnector(t.inputName),s=new o.Connection(i,n,null);return i.addConnection(s),n.addConnection(s),s.view.createView(e.designer.view.connectionsLayer),s}));setTimeout((function(){i.forEach((function(t){return t.view.updateView()}))}))},t.prototype.deleteActivity=function(t){var e=this.designer.getActivity(t);e.view.deleteConnectionViews(),e.view.deleteView(),e.deleteConnections();var i=this.designer.activities.indexOf(e);this.designer.activities.splice(i,1),this.onDeleted.fire(t)},t.prototype.getActivities=function(){return this.designer.activities.map((function(t){return t.getDefinition()}))},t.prototype.getActivity=function(t){return this.designer.getActivity(t).getDefinition()},t.prototype.getConnections=function(){return this.designer.getUniqueConnections().map((function(t){return t.getDefinition()}))},t.prototype.selectActivity=function(t){this.tryUnselectActivity();var e=this.designer.getActivity(t);e.isSelected=!0,e.view.updateView(),this.onSelected.fire(t)},t.prototype.setIsReadOnly=function(t){this.designer.isReadOnly=t,this.designer.view.updateIsReadonly(),this.designer.control.view.updateView()},t.prototype.isReadOnly=function(){return this.designer.isReadOnly},t.prototype.tryUnselectActivity=function(){var t=this.designer.tryGetSelectedActivity();return!!t&&(t.isSelected=!1,t.view.updateView(),this.onUnselected.fire(t.name),!0)},t.prototype.updateActivity=function(t){var e=this.designer.getActivity(t.name);e.update(t),e.view.updateView(),e.view.updateConnectionViews()},t.prototype.tryGetSelectedActivityName=function(){var t=this.designer.tryGetSelectedActivity();return t?t.name:null},t.prototype.getPositionForNewActivity=function(){var t=this.designer.scrollPosition.divideConst(-this.designer.scale);return{left:t.x,top:t.y}},t.prototype.clear=function(){this.designer.getUniqueConnections().forEach((function(t){return t.view.deleteView()})),this.designer.activities.forEach((function(t){return t.view.deleteView()})),this.designer.activities.length=0},t.prototype.scrollToActivity=function(t,e){var i=this.designer.getActivity(t).position.multiplyConst(this.designer.scale).subtract(this.designer.view.getSize().divideConst(2));this.scrollTo(i,e)},t.prototype.scrollToCenter=function(t){this.scrollTo(new a.Vector(0,0),t)},t.prototype.scrollTo=function(t,e){var i=this,n=this.designer.scrollPosition,o=t.add(n);c.animate((function(t){i.designer.scrollPosition=n.subtract(o.multiplyConst(t)),i.designer.view.updateViewPort()}),e||300)},t}();e.DesignerHost=h},139:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.EventEmitter=void 0;var i=function(){function t(){this.listeners=[]}return t.prototype.addListener=function(t){this.listeners.push(t)},t.prototype.fire=function(t){this.listeners.forEach((function(e){return e(t)}))},t}();e.EventEmitter=i},147:function(t,e){function i(t,e){Object.keys(e).forEach((function(i){var n=e[i];t.setAttribute(i,n.toString())}))}Object.defineProperty(e,"__esModule",{value:!0}),e.animate=e.tryFind=e.isChildOf=e.setAttrs=e.createSvgElement=void 0,e.createSvgElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);return e&&i(n,e),n},e.setAttrs=i,e.isChildOf=function(t,e){do{if(e===t)return!0;e=e.parentNode}while(e);return!1},e.tryFind=function(t,e){for(var i=0,n=t;i<n.length;i++){var o=n[i];if(e(o))return o}return null},e.animate=function(t,e){var i=Date.now(),n=setInterval((function(){var o=(Date.now()-i)/e;o>=1?(clearInterval(n),t(1)):t(o)}),10)}},440:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Vector=void 0;var i=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.multiplyConst=function(e){return new t(this.x*e,this.y*e)},t.prototype.divideConst=function(e){return new t(this.x/e,this.y/e)},t.prototype.round=function(){return new t(Math.round(this.x),Math.round(this.y))},t.prototype.distance=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},t.prototype.angleRad=function(t){return Math.atan2(this.y-t.y,this.x-t.x)*(180/Math.PI)},t}();e.Vector=i}},e={};!function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}(654)}();