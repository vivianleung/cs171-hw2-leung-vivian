  var getNode = function(obj) { return graph.nodes[shaToIndex[obj.sha]]; }

  // FIND / SET ORIGIN graph.node[0] (no parents)
  // do master first
  var masterHeadNode = findMaster(0);

   branchify(0, masterHeadNode);

  var masterHeadNode = function(i) {
    if (i >= heads.length) { 
      console.log("error, no master branch. using first one as default.");
      return getNode(heads[0].commit);
    }
    else if (heads[i].name == "master"){
      heads[i] = [heads[0], heads[0] = heads[i]][0];
      return getNode(heads[0].commit]);
    }
    else { return masterHeadNode(++i); }
  }

  var masterHead = heads.master;

  // bInx is iterating index val for heads 
  var branchify = function(b, n) {

    var numPar = n.parents.length;
    // if reached end of branch (parent)
    if (numPar == 0) { 
      if (++b >= heads.length) { return; };
      else { return branchify(b, getNode(heads[b])); }
    }
  
    // either along a branch or at a branch event
    // if at a merge node
    else if (numPar > 1){
      var pNodes = n.parents.map( function(d) { return getNode(d); });

      var pull;
      // for each parent NODE
      pNodes.forEach(function(h) {
        if (pulldata[h.sha] != undefined) {
          pull = pulldata[h.sha];
          n.branch = pull.head;
          h.branch = pull.head;

          pNodes.forEach(function(base) {
            if(pull.base.sha == e.sha){
              e.branch = pull.base;

              //  combine for each return call. 1. get node, 2. return with remembered branch and node name
          var nextP = d.parents.map( function(d) {return getNode(d); });
              e.parents.forEach( function(h) {nextP.push(getNode(h)); });

              nextP.forEach( function(next) { 
                return branchify(next.branch  ) 
              })

            }

          })
        }
        
      })





      
      });
    }

    // if branch is already defined (e.g. part of master, or other)
    // put inside not empty else if (n.branch != undefined) { 


    // node is product of a merge
    // first parent item is the host of the merge (GETS merged into)
    // second (and subsequent parents) the ones that merge INTO the first
    else {
      n.branch = b; 
      // FOR EACH PARENT
      return branchify(b, getNode(n.parents[0])); 
    }
  }