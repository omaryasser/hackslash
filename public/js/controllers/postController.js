angular.module('pettts')

.controller('postController', function($scope, $http, Post) {
    /* $scope.formData = {};
     var type = "";
     // addPost ===========================
     $scope.addPost = function() {
         Post.add($scope.formData)
             .success(function(response) {
                 $scope.formData = {};
                 $scope.tagline = response;
             }).error(function(error) {
                 $scope.formData = {};
                 $scope.tagline = error;
             });
     };

     // editPost ==========================
     $scope.editPost = function() {
         switch (formData.type) {
             case 1:
                 type = "sell";
                 break;
             case 2:
                 type = "shelter";
                 break;
             case 3:
                 type = "mate";
                 break;
             case 4:
                 type = "lost";
                 break;
             case 5:
                 type = "found";
                 break;
             case 6:
                 type = "exchange";
                 break;
             default:
                 type = "error";
                 break;
         }
         if (type != "error") {
             Post.edit($scope.formData, type)
                 .success(function(response) {
                     $scope.formData = {};
                     $scope.tagline = response;
                 }).error(function(error) {
                     $scope.formData = {};
                     $scope.tagline = error;
                 });

         };
     }*/


    $scope.submitAdd = function() {

        var post = $scope.post;
        $scope.message = Post.add(post, post.type);

    };
    $scope.submitEdit = function() {

        var post = $scope.post;
        $scope.message = Post.edit(post, post.type);

    }
});