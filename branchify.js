  var getNode = function(obj) { return graph.nodes[shaToIndex[obj.sha]]; }

  // FIND / SET ORIGIN graph.node[0] (no parents)
  // do master first


  branchify(heads.master.sha, getNode(heads.master));
  heads.forEach( function(bhead) {
    if (bhead.name != "master") { branchify(bhead.sha, getNode(bhead)); }    
  });

  // FUNCTIONNNN bInx is iterating index val for heads 
  var branchify = function(b, currN) {

    var currP = currN.parents;

    // base case: end of branch (first commit of repo)
    if (currP.length == 0) { return; } //
    }

    // recursive cases:
    else{
      if (currP.length > 1){

        var currPn = currP.map(function(d) {return getNode(d); };
        var pull = null;

        // for each parent NODE
        currPn.forEach(function(baseP) {

          if (baseP.branch == undefined) { 
            // find base
            if (pulls[baseP.sha] != undefined) {
              pull = pulls[baseP.sha];
              baseP.branch = pull.base;
              branchify(pull.base, baseP);

              // if found base, set head 
              currPn.forEach(function(headP, a) {
                if(pull.head.sha == headP.sha){ 
                  headP.branch = pull.head;
                  branchify(pull.head, headP);
                }
              })
            }
            else { branchify(baseP.branch, baseP); }
          }
        }); // end of currPn loop

        // if pulls not found 
        if (pulls == null) { 
          currPn[0].branch = currN.branch;
          branchify(currPn[0].branch, currPn[0]);
        }      
      }
    }
