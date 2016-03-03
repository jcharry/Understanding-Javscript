console.log(this);

var obj = {
    name: this,
    occupation: 'superstar',
    whoami: function() {
        console.log(this);
    }
};

function func() {
    console.log(this);
}

func();
//console.log(obj.name);
//obj.whoami();



