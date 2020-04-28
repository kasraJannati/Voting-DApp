var Voting = artifacts.require("Voting");

contract('Voting', function(accounts) {

  it("Vote proposal", function() {
    var votingCase;
    return web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      return Voting.deployed().then(function(instance) {
        votingCase = instance;
        return votingCase.addProposal.call('Proposal');
      }).then(function(data) {
        return votingCase.vote.call(0, 1, {from: account});
      }).then(function(data) {
        assert.equal(data, true, "Test failed");
      });
    });
  });

  it("Add proposal", function() {
    return Voting.deployed().then(function(instance) {
      return instance.addProposal.call('Proposal');
    }).then(function(data) {
      assert.equal(data, true, "Test failed");
    });
  });
  
});


