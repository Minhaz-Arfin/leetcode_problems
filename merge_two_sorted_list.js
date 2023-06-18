function mergeTwoList(list1, list2) {
    list1 = list1.splice(0, 0, list2);
    console.log(list1);
}

list1=[1,3,5];
list2=[1,2,4];