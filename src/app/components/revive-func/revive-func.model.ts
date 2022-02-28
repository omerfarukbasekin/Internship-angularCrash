export class CommentModel {
    img: String ='assets/images/user2.jpg';
    stars!: {
        starOne: Boolean;
        starTwo: Boolean;
        starTree: Boolean;
        starFour: Boolean;
        starFive: Boolean;
    };
    id : number = 0;
    firstName : string = '';
    email : string = '';
    revive : string = '';
    checkBox!: Boolean;
   
}
