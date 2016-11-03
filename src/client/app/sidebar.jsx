import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
var Sidebar = React.createClass({
    render:function(){
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
                    <h1><strong>{this.props.name}</strong></h1>
                    <p>{this.props.title}</p>
                    <ul>
                    {this.props.pages.map(page => (
                        <li key={page}><Link to={`#${page}`}>{page}</Link></li>
                    ))}
                    </ul>
                </div>
            </header>
    }
})
module.exports = Sidebar;

/*
<header id="header">
    <div class="inner">
        <a href="#" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
        <h1><strong>I am Strata</strong>, a super simple<br />
        responsive site template freebie<br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
    </div>
</header>*/
