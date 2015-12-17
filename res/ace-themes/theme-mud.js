/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/mud', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-mud";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 1e136163-6e1b-8cdf-a06e-107c2e6370a0) */\
.ace-mud .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-mud .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-mud {\
background-color: #403635;\
color: #ffffff;\
}\
.ace-mud .ace_cursor {\
color: #f8f8f0;\
}\
.ace-mud .ace_marker-layer .ace_selection {\
background: #b5db99;\
}\
.ace-mud.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #403635;\
border-radius: 2px;\
}\
.ace-mud .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-mud .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-mud .ace_marker-layer .ace_active-line {\
background: #322a29;\
}\
.ace-mud .ace_gutter-active-line {\
background-color: #322a29;\
}\
.ace-mud .ace_marker-layer .ace_selected-word {\
border: 1px solid #b5db99;\
}\
.ace-mud .ace_fold {\
background-color: #b5db99;\
border-color: #ffffff;\
}\
.ace-mud .ace_keyword{color:#FF9787;}.ace-mud .ace_keyword.ace_other.ace_unit{color:#e9c865;}.ace-mud .ace_constant.ace_language{color:#FF9787;}.ace-mud .ace_constant.ace_numeric{color:#b5db99;}.ace-mud .ace_constant.ace_character{color:#FF9787;}.ace-mud .ace_constant.ace_other{color:#FF9787;}.ace-mud .ace_support.ace_function{color:#e9c865;}.ace-mud .ace_support.ace_constant{color:#FF9787;}.ace-mud .ace_support.ace_constant.ace_property-value{color:#b5db99;}.ace-mud .ace_support.ace_class{font-style:italic;\
color:#FF9787;}.ace-mud .ace_support.ace_type{font-style:italic;\
color:#FF9787;}.ace-mud .ace_storage{color:#FF9787;}.ace-mud .ace_storage.ace_type{color:#e9c865;}.ace-mud .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-mud .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-mud .ace_string{color:#b5db99;}.ace-mud .ace_comment{color:#c3b8b7;}.ace-mud .ace_variable{color:#b5db99;}.ace-mud .ace_variable.ace_parameter{font-style:italic;}.ace-mud .ace_entity.ace_other.ace_attribute-name{color:#FF9787;}.ace-mud .ace_entity.ace_name.ace_function{color:#b5db99;}.ace-mud .ace_entity.ace_name.ace_tag{color:#e9c865;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});