angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<div class=\"test-div\">\nYO\n</div>");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>");
$templateCache.put("layout/footer.html","");
$templateCache.put("layout/header.html","");}]);