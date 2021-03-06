var EmoticonAdv = {
	activeTextAreaId:"",
	showDropDown: function(id){
		this.activeTextAreaId = id;
		buttonPosition = $("#"+id+" .formattingButtons .emoticon").offset();
		$("#emoticonDropDown").css( {
					left: buttonPosition.left,
					top: buttonPosition.top+6
			} );

		$("#emoticonDropDown").fadeIn();
	},
	hideDropDown: function(){
		$("#emoticonDropDown").hide();

	},
	insertSmiley : function(smiley){
		ETConversation.insertText($("#"+this.activeTextAreaId+" textarea"), " "+smiley+" ");

	}
};

//bind mouse out event to automatically close the menu
$(function(){
		$("#emoticonDropDown").bind("mouseleave",function(){
			EmoticonAdv.hideDropDown();
		});
		$(document).click(function(){
			EmoticonAdv.hideDropDown();
		});			
		$("#emoticonDropDown").click(function(){
			EmoticonAdv.hideDropDown();
		});		
		$("#emoticonDropDown *").click(function(event){
			event.stopPropagation(); //this is needed to prevent the reply area to collapse on click outside it
		});
});
