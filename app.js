(function() {
  'use strict'

  angular.module('app', [])
    .component('reddit', {
      controller: function() {
        const vm = this;

        vm.$onInit = onInit;
        vm.addPost = addPost;
        vm.addComment = addComment;
        vm.toggleForm = toggleForm;
        vm.toggleComments = toggleComments;
        vm.toggleFilter = toggleFilter;
        vm.upVote = upVote;
        vm.downVote = downVote;
        vm.getDate = getDate;
        vm.reverse = false;
        vm.search = "";
        vm.formFilter;

        function onInit() {
          vm.showForm = false;
          //vm.comment = 0;
          vm.posts = [{
              title: 'talking heads',
              body: 'fu fu fu fu fu fu fuuu fu fu fu fuu',
              author: 'Peter',
              img: 'http://images.fanpop.com/images/image_uploads/Talking-Heads-talking-heads-547960_800_600.jpg',
              comments: [],
              votes: 0,
              showComments: false,
              date: Date.now() - 496400000,
              dateVal: ""
            },
            {
              title: 'r/superbowl',
              body: 'I am tiny, I am smol, I am most superb of all',
              author: 'Zubair',
              img: 'https://i.redditmedia.com/RZJTwVMPpWiFZn36Nlxu7ThMVVRwCjLdQ7mmpB8zlO8.jpg?w=960&s=76e679110b48d55c640f59aecedf1aad',
              comments: [],
              votes: 0,
              showComments: false,
              date: Date.now() - 12400000,
              dateVal: ""
            },

          ];
          getDate();
        }

        function addPost() {
          if (vm.post.title && vm.post.body && vm.post.author && vm.post.img) {
            vm.post.comments = [];
            vm.post.comment = '';
            vm.post.showComments = false;
            vm.post.votes = 0;
            vm.date = Date.now();
            vm.dateVal = "ssdsd";
            vm.posts.push(vm.post);
            getDate();
            delete vm.post;
          }
        }

        function addComment(post) {
          if (post.comment) {
            post.comments.push(post.comment);
            delete post.comment;
          }
        }

        function toggleForm() {
          vm.showForm = !vm.showForm;
        }

        function toggleComments(post) {
          post.showComments = !post.showComments;
        }

        function toggleFilter() {
          if (vm.formFilter === 'votes') {
            vm.reverse = true;
          } else {
            vm.reverse = false;
          }
        }

        function getDate() {
          console.log('sdadadaa');
          vm.posts.forEach(post => {
            let tempDate = 0;
            let count = 0;
            while (Date.now() - post.date > tempDate + 86400000) {
              tempDate += 86400000;
              count++;
            }
            if (tempDate !== 0) {
              post.dateVal = `${count} days old`;
            } else {
              while (Date.now() - post.date > tempDate + 3600000) {
                tempDate += 3600000;
                count++;
              }
              if (tempDate !== 0) {
                post.dateVal = `${count} hours old`;
              } else {
                while (Date.now() - post.date > tempDate + 60000) {
                  tempDate += 60000;
                  count++;
                }
                if (tempDate !== 0) {
                  post.dateVal = `${count} minutes old`;
                } else {
                  while (Date.now() - post.date > tempDate + 60000) {
                    tempDate += 60000;
                    count++;
                  }
                  if (tempDate !== 0) {
                    post.dateVal = `${count} minutes old`;
                  } else {
                    post.dateVal = 'just now'
                  }
                }
              }
            }
          })
          // setInterval(() => {
          //   getDate()
          // }, 3000);
        }

        function upVote(post) {
          post.votes++;
        }

        function downVote(post) {
          if (post.votes !== 0) {
            post.votes--;
          }
        }

      },
      templateUrl: '/templates/app.html'

    })

}());
