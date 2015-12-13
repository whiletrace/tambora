$typetype = function(){
  console.log("TT HERE");
  $("#one").typetype("Today was a great day, we finaly came upon the Island of Sambawa It is located in Indonesia 400 miles South of Java. We are looking forward to explore the Island and all of it's beauty", {
    e: 0, // error rate. (use e=0 for perfect typing)
    t: 30, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  });


  $("#two").typetype("We have finnaly gotten a chance to walk around a bit. We came accross a huge mountain. It must be at least 14,000 ft tall. We heard that this moutain is called Mt. Tambora. and that actually is a volcano. This volcano is said to be one of many in what is known as the Pacific Ring of fire",{
    e: 0., // error rate. (use e=0 for perfect typing)
    t: 25, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  });


  $("#three").typetype("Remember that beutiful Moutain we visited. There has been some dire news. It has been rumored that It has violently erupted with tragic consequences. The ash cloud is said to have reached 45 kilometers in the atmosphere. The eruption is said to have released about 65 Kilometers worth of magma. It is one the most violent eruption in modern history",{
    e: 0., // error rate. (use e=0 for perfect typing)
    t: 25, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  });
 
  $("#four").typetype("I have further news on the eruption. Mt. Tambora is now a caldera 4milesi across and  3640 ft deep. Right now the US and Europe are experiences extremely cold weather due to the ash released from the volcano into the atmosphere. It is rumored that crops will fail and possible famine will ensue let us hope for the best in the year without a summer.",{
    e: 0.0, // error rate. (use e=0 for perfect typing)
    t: 25, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  });
 };

 

 
