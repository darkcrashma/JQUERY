
/**/

// var allClasses= $('[class]');
// var allID = $('[id]');
// var allTags = $("*");
//
// console.log(allClasses);
// console.log(allID);
// console.log(allTags);



var allNames= $('[name]');
// var allChecks = $(':checkbox');
// var allInputs = $(":input");
// var allBtn = $(":button");
// var allRadio = $(":radio");
//
console.log(allNames);
// console.log(allChecks);
// console.log(allInputs);
// console.log(allBtn);
// console.log(allRadio);

// var allChecked= $(':checked');
// var allEnabled= $(':enabled');
// var allDisabled= $(':disabled');
//
// console.log(allChecked);
// console.log(allEnabled);
// console.log(allDisabled);



// var listChildren=$('.nav > a');
// console.log(listChildren);

var multiAttr = $('[name="search_domain"],[class="pull-left"],[class="search-input"]').css({
    'outline' : '2px solid red',
    'background-color' : 'magenta'
}); /*ПОЧЕМУ НЕ ИЩЕТ */
console.log(multiAttr);

// var multiName = $('[name][class]');
// console.log(multiName);


