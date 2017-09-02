// 这是我们的玩家要躲避的敌人
var Enemy = function(y) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = Math.random()*600;
    this.y = y;
    this.speed = parseInt(Math.random()*100+100);

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed*dt;
    if (this.x > 600) {
        this.x = -50;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function (x, y) {
    // x,y 为玩家的而实际的位置
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    // 记录玩家原始位置
    this.originX = x;
    this.originY = y;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update = function (dt) {
    // 碰撞检测：如果玩家和虫子x、y重合，玩家回原点，此外玩家和原点都有占一定面积，所以x,y的重合是在一个范围内
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x - this.x > -50) && (allEnemies[i].x - this.x < 50) && (allEnemies[i].y - this.y > -50) && (allEnemies[i].y - this.y < 50)) {
            this.x = this.originX;
            this.y = this.originY;
        }
    }

    // 判断是否获胜
    if (this.y < 0) {
        alert("玩家胜利");
        this.x = this.originX;
        this.y = this.originY;
    }
};

Player.prototype.handleInput = function (dir) {
    // 处理玩家上下左右4个方向的操作
    switch(dir){
        case 'left':
            if (this.x > 0) {
                this.x -= 100;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 100;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= 85;
            }
            break;
        case 'down':
            if (this.y < 400) {
                this.y += 85;
            }
            break;
    }
}


// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
for (var i = 0; i < 3; i++) {
    var bug = new Enemy(60 + i*85);
    allEnemies.push(bug);
}
// 可以设置玩家的起点
var player = new Player(200, 325);


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
