var goodUsers = [{id : 1}, {id : 2}, {id : 3}];

function testAllValid(users) {
   const isValid = users.every(function (users){
    const isExist = goodUsers.some(function(goodUser){
        return users.id == goodUser.id
    });

return isExist;
   });
   return isValid;
}
testAllValid([{id: 1}, {id: 4}]);
console.log(testAllValid([{id: 1}, {id:2}]));