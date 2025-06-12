function checkVotingEligibilty(age){
    if (age < 0 || age == 0){
        console.log("Invalid input");
    }
    else if (age < 18){
        console.log("Not eligible");
    }
    else {
        console.log("Eligible to vote");
    }
}
checkVotingEligibilty(18);
checkVotingEligibilty(2);
checkVotingEligibilty(0);
checkVotingEligibilty(-1);
