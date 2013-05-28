$(document).ready(function(){
 
   appendTableWithData(data, 'leetcode_questions_table', 'leetcode_questions_template');
   $("#leetcode_questions_table").tablesorter();

   function appendTableWithData(data, selectorId, templateId){
       var template = make_template(templateId);
       $("#"+selectorId).append(template({ questions: data }));
   }

   function make_template(id){
     return Handlebars.compile($("#"+id).html());
   }

});