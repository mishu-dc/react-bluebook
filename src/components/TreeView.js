import React, {Component} from 'react';

class TreeView extends Component{
  
    setNodeId(node) {
  
      if (!node.chields) return;
  
      var _this = this;
      node.chields.forEach(function checkStates(node) {
        node.nodeId = node.id;
       // _this.props.nodes.push(node);
        _this.setNodeId(node);
      });
    }
  
    render() {

      const defaultprops = {
            levels: 2,
      
            expandIcon: 'glyphicon glyphicon-plus',
            collapseIcon: 'glyphicon glyphicon-minus',
            emptyIcon: 'glyphicon',
            nodeIcon: 'glyphicon glyphicon-stop',
      
            color: undefined,
            backColor: undefined,
            borderColor: undefined,
            onhoverColor: '#F5F5F5', // TODO Not implemented yet, investigate radium.js 'A toolchain for React component styling'
            selectedColor: '#FFFFFF',
            selectedBackColor: '#428bca',
      
            enableLinks: false,
            highlightSelected: false,
            showBorder: false,
            showTags: false,
      
            nodes: []
          }  

      var data = this.props.data;    
      this.setNodeId({ nodes: data });
  
      var children = [];
      if (data) {
        data.forEach(function (node) {
          children.push(<TreeNode 
                                  key ={node.id}  
                                  node={node}
                                  level={1}
                                  visible={true}
                                  options={defaultprops} />);
        });
      }
  
      return (
        <div id='treeview' className='treeview'>
          <ul className='list-group'>
            {children}
          </ul>
        </div>
      );
    }
  }

  export default TreeView;
  
  
  class TreeNode extends Component{
  
    constructor(props){
        super(props);
        var node = this.props.node;
        this.state = {
          expanded: (node.state && node.state.hasOwnProperty('expanded')) ?
                      node.state.expanded :
                        (this.props.level < this.props.options.levels) ?
                          true :
                          false,
          selected: (node.state && node.state.hasOwnProperty('selected')) ? 
                      node.state.selected :
                      false
        };
    }
  
    toggleExpanded(id, event) {
      this.setState({ expanded: !this.state.expanded });
      event.stopPropagation();
    }
  
    toggleSelected(id, event) {
      this.setState({ selected: !this.state.selected });
      event.stopPropagation();
    }
  
    render(){
  
      var node = this.props.node;
      var options = this.props.options;
  
      var style;
      if (!this.props.visible) {
  
        style = { 
          display: 'none' 
        };
      }
      else {
  
        if (options.highlightSelected && this.state.selected) {
          style = {
            color: options.selectedColor,
            backgroundColor: options.selectedBackColor
          };
        }
        else {
          style = {
            color: node.color || options.color,
            backgroundColor: node.backColor || options.backColor
          };
        }
  
        if (!options.showBorder) {
          style.border = 'none';
        }
        else if (options.borderColor) {
          style.border = '1px solid ' + options.borderColor;
        }
      } 
  
      var indents = [];
      for (var i = 0; i < this.props.level-2; i++) {
        indents.push(<span key={i} className=''></span>);
      }
  
      var expandCollapseIcon;
      if (node.chields) {
        if (!this.state.expanded) {
          expandCollapseIcon = (
            <span className={options.expandIcon}
                  onClick={this.toggleExpanded.bind(this, node.nodeId)}>
            </span>
          );
        }
        else {
          expandCollapseIcon = (
            <span className={options.collapseIcon}
                  onClick={this.toggleExpanded.bind(this, node.nodeId)}>
            </span>
          );
        }
      }
      else {
        expandCollapseIcon = (
          <span className={options.emptyIcon}></span>
        );
      }
  
      var nodeIcon = (
        <span className='icon'>
          <i className={node.icon || options.nodeIcon}></i>
        </span>
      );
  
      var nodeText;
      if (options.enableLinks) {
        nodeText = (
          <a href={node.href} /*style="color:inherit;"*/>
            {node.name}
          </a>
        );
      }
      else {
        nodeText = (
          <span>{node.name}</span>
        );
      }
  
      var badges;
      if (options.showTags && node.tags) {
        badges = node.tags.map(function (tag) {
          return (
            <span className='badge'>{tag}</span>
          );
        });
      }
  
      var children = [];
      if (node.chields) {
        var _this = this;
        node.chields.forEach(function (node) {
          children.push(<TreeNode 
                                  key = {node.id}  
                                  node={node}
                                  level={_this.props.level+1}
                                  visible={_this.state.expanded && _this.props.visible}
                                  options={options} />);
        });
      }
  
      return (
        <ul>
            <li className='list-group-item'
                style={style}
                onClick={this.toggleSelected.bind(this, node.nodeId)}
                key={node.nodeId}>
            {indents}
            {expandCollapseIcon}
            {nodeIcon}
            {nodeText}
            {badges}
            {children}
            </li>
        </ul>
      );
    }
  }