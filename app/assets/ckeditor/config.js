/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( a )
{
	/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
  a.filebrowserBrowseUrl="/ckeditor/attachment_files",
  a.filebrowserFlashBrowseUrl="/ckeditor/attachment_files",
  a.filebrowserFlashUploadUrl="/ckeditor/attachment_files",
  a.filebrowserImageBrowseLinkUrl="/ckeditor/pictures",
  a.filebrowserImageBrowseUrl="/ckeditor/pictures",
  a.filebrowserImageUploadUrl="/ckeditor/pictures",
  a.filebrowserUploadUrl="/ckeditor/attachment_files",
  a.filebrowserParams=function(){
    var a=jQuery("meta[name=csrf-token]").attr("content"),
    b=jQuery("meta[name=csrf-param]").attr("content"),
    c=new Object;return b!==undefined&&a!==undefined&&(c[b]=a),c
  },
  a.extraPlugins="embed,attachment",
  a.toolbar="Easy",
  a.toolbar_Easy=[
      //["Source","-","Preview"],
      //["Cut","Copy","Paste","PasteText","PasteFromWord"],
      //["Undo","Redo","-","SelectAll","RemoveFormat"],
      //["Styles","Format"],
      ["Subscript","Superscript","TextColor"],
      ["Bold","Italic","Underline","Strike"],
      ["NumberedList","BulletedList","-","Outdent","Indent","Blockquote"],
      ["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],
      //["Link","Unlink","Anchor"],
      ["Image","Table","HorizontalRule","Smiley","SpecialChar"],
      ["Maximize","-","Source"]
    ]
};