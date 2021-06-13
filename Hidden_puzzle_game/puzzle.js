"use strict";
var W, H, L, D, joy, A, B;
var victory = false;
var inv = {
  light1: false,
  light2: false,
  light3: false,
  light4: false,
  key1: false,
  key2: false,
  key3: false,
  key4: false
};
A=new Date().getTime();
const { sin, cos, PI, sqrt, random, floor, ceil, round, abs } = Math;

function id(n) {
  return document.getElementById(n);
}
var avater = new Image();
avater.src =
  "data:image/png;base64,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";
var wall = new Image();
wall.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAABLElEQVRYR+3YIQ7CQBAF0K2EC2AQnAAPljug0WgsDovFY7FoNAk3AAlYNJa/hCYNSduZnelOm2yTnzTptn39m3SbZs65G3JF2roNMsiOv7QVOU5IpalJTSoV6VKTnWhyAuUM2SJvgbjx6V4ANxRCWUjfzAN5MluRQllI38gS2UWGspC+QAsoG2kBDULGhgYjY0JFyFhQMVILuql4rakgpdA5LnBCXiVQNaQUWrU+qCKbgqojm4CSkH7NPjPXa8nK9H8rEnKNs+7I3ghKQvaAWxlCSUhfoCWUjLSEspBWUDbSAhqEjA0NRmpAp7jIgfBaEyGlUILvO0SMLEL9P05KM1RcPk4FmUP72Cn73OLCiuPVkBJE3bkJWdcQ9XhqktpU3bjuNHnBo/i0dRt9AL8dlTSv25qnAAAAAElFTkSuQmCC";

var button = new Image();
button.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAFCElEQVRYR+2XbUhkVRjHn5lxfB9f8C3RVBYq8oMpggZqur580NBWWEl0aZVAqg1qIyqWXfw0lIqbIUM5hNQMySaBIgyizAcpP5iQOF/EKBb7UJqgMer4Mq/9n4NnuO4u7J3xflmYC4dznXvvOb/z/z/Pc446egYu3TPASDFIrVyKKRlTUisFtBrnUjHZ0NDw3PHx8dXT09MqnU5XrNfrM9HHo/eGQqH/0P9lNBp/i4+Pdy4tLf0L6FA04NFC6urr66/v7+/fAsiLgMg2GAxGNMLfBFDBgt7n9/v3g8HgZkJCwrcA/SEa0IghW1tbE/b29r48Ojp6Mzk5OQOT65VwDMigSliABaG2G789SExMvD0/P38WiaIRQdbU1Ji8Xu/UyclJa1pamgFWCtWUjYH5kpDK/uzsLIAwmIeyN5xOp1stqGrIsrKyFKj2GSa6bTKZUhjwUZi4uDiSkAB5DJQXA/s9eGb1+Xz3FhcXPWpA1ULqqqqqXsfAw0lJSS8jBoV60taMjAwqKCig/Px8gp0Ea2l7e5t2d3cJiXXhXYYKBAIPoegHMzMzDjUxqgqyrq4ux+PxDAHuLUAaJCArV1JSQm1tbVRRUUFZWVkCCGrTzs4Ora+v0/Lysrjn31nl86QCZ8CGxdydm5v752lqqoKsrq5+FSu3QaUX2GYZZ4WFhdTX10eVlZXEwLAy3ABBWBi5XC4CiLiXkAyK8f6AM+9NT087tYLsB5g1JSUlTlrMUN3d3dTZ2SnUYShMGu4lMFvvcDhobW1NQMrv0eMV/8c2m+0rTSBra2uHsPJPUlNTxSR8wXYaHR2lnJycCwoyHMNyz+Dctra2yG63ExIv7AID45llcnLyfU0gEZPfQbmbnBRSCU6SoaEh4ixW2izVlID8DDWVJiYmREhINfke3/6I37s1gcTuYkcs3pCQbG9eXh6ZzeawahJUCSfvOR4ZktWXtZV7uPOTxWLp0gSysbHxa6z8HSUkWz84OCjUeZJ6EpCfcSmampqizMxM8T67wZBQ0jY+Pn5TE8iWlpZPYdMXrIQsJVCBent7qbS0VMSdMgaV9mOHotXVVZE4ubm54Qzn+MR35rGxsbuaQDY3N7+BQe1Q0iRjkgcuKiqi9vZ2whYZThIJKJOHa+TCwoJQLz09XfQcl1D0EAu9heSzawLZ1NRUivLzDYp5HdslizkrWFxcTAgHAarMbIZkQC7mBwcHQkVlPGKcXw4PDz9ETK5pAolibUQ234HddzARnxeFImw5b3s8eXl5udh92Ea3202bm5tix+FnvGXK8nMejz705tnZ2c83Nja8mkDyIB0dHWWY6D4sv4oJ9FJNBuVtkMGkxfw+K56dnU28rzOoLD24D2KcX3HcexdJ43oaID9XtS2eD6Tr6uq6BsgRTHQFkHxdODcyMDeZvcodht9FuIQA+BB1897IyMgDNYeLSCEJkHyGfBu2f4T+JTGA4jz56BlSeVJiu6Hu7ziL3l9ZWZnEKd2vRsWIIc8HNfT09LyGOjmAia8BLJF3HQkrQWWp4mMdFnSKJHNgH7cMDw//jHECagGjhRTj9/f3Pw/r6wHRg1YLEJP834Zt5gbrj5DxK1jE90iwZdTErUjg5LuRxORj4w8MDIDNmAaQQkC9Augr6FMBd4xk+hPPXAD/G6XGbbVafdEAXkrJaCeM5rtLKRnNhNF8E4OMRrUnfRNTMqakVgpoNU4sJrVS8n/dpH5IJTN6FQAAAABJRU5ErkJggg==";

var keycard = new Image();
keycard.src =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACVElEQVRYR+2W3U9SYRzHv2STl7MJmwvGhKsW0+iiGy5waxbZAsqkVKwl85W/jABfAjYa4oYOBOymeeO6SnozkyFb6eHZOaDA6cRFW+kC8WxnbOdsz9Xze37PZ5/v7+wcGTrgkXUAIyRIoVKSTEomhTIgVB9pJiWTQhkQqo80k5LJVg24Rp+tFfL5qkzGEffzSdwwmRpH8wcH+PzpC/qMfVe33233MmWmFAwGn7Ta99+6S82kw+4kxUKBUioVmJ6dxcDNgUb/t1tbiMdWMe6ewM7Oe9A0XQoE/T2iQNofOkjxkIeUy/Fi6uUfk+nNNKKRCDwzM8jlPuKYpn8sLgZ6RYEcH5sgh7xJrl7DXZsNBqOhwfH92z52dz/A1N+Pvb19VCqVUiDwShyTbvckISVCsSwDtUYDhULOI8pQq1Zxyq+uris4OTmFUqlkl5eXVKKYdLnGSI2P+zp9BIOMH2/uNwYHrl4HymVUWBY5uQJF8y02FnsjDuTIyCjpoY+pp5QKt9Xqv0VxHBje5vrPIyS6u9l4fFUcyEfOx0SrvUbNzc/BarWeSZMQgnA4gmBwiU0k1sSBtNsdRKfTUQsL8/+BDMPvD7AbG+viQA4PPyB6vZ7yer0YHDzfZCgUgs/nY1OplDiQNtv9r1qtVuXxTMFisZyJm2EYRKNRrKy8LmcyaaMob/fQ0L1NjUZNOZ0OmM3mcyEzmQySySSbzWbviALZ7qUXPXepb/dFL2u3XoJs15ygv2pCQTTrI8XdzFCr+5LJVk01q5NMNjPU6r5kslVTzeo6wuQvFJjWKswx3nMAAAAASUVORK5CYII=";

var map = [
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0]
];
//console.log(map[0].length)

/*var map = [];
for(let i=0;i<c;i++){
    let row = [];
    for(let j=0;j<c;j++)
        row.push(round(random()*0.9));
    map.push(row);        
}
map[c-2][1] = 0;*/
var barriers = [],
  keys = [],
  buttons = [];

function atan(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  if (dx == 0) {
    if (dy >= 0) {
      return PI / 2;
    } else {
      return (3 / 2) * PI;
    }
  } else if (dx > 0) {
    return Math.atan(dy / dx);
  } else {
    return PI + Math.atan(dy / dx);
  }
}

window.onload = function () {
  var cnv = document.getElementById("cnv");
  var ctx = cnv.getContext("2d");
  function init() {
    barriers = [];
    W = window.innerWidth;
    H = window.innerHeight;
    cnv.width = W;
    cnv.height = H;
    L = (W < H ? W : H) * 4;
    D = L / map.length;
    for (let row = 0; row < map.length; row++) {
      for (let col = 0; col < map[row].length; col++) {
        if (map[row][col]) {
          //console.log(row)
          let b = {
            x: D * col,
            y: D * row,
            w: D,
            h: D
          };
          barriers.push(b);
        }
      }
    }
    barriers.push({ x: 0, y: 0, w: L, h: 0 });
    barriers.push({ x: 0, y: 0, w: 0, h: L });
    barriers.push({ x: L, y: 0, w: 0, h: L });
    barriers.push({ x: 0, y: L, w: L, h: 0 });
    //draw();
    ctx.shadowBlur = D / 3;
  }
  init();
  joy = {
    x: 0,
    y: 0,
    x1: 0,
    y1: 0,
    ang: 0,
    dist: 0,
    maxR: 70,
    stick: false,
    draw: function () {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.maxR + 25, 0, PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(
        this.x + this.dist * cos(this.ang),
        this.y + this.dist * sin(this.ang),
        25,
        0,
        PI * 2
      );
      ctx.stroke();
    },
    fix: function (e) {
      joy.stick = true;
      //alert(joy.stick)
      if (e.clientX) {
        joy.x = e.clientX;
        joy.y = e.clientY;
      } else {
        joy.x = e.touches[0].clientX;
        joy.y = e.touches[0].clientY;
      }
      joy.x1 = joy.x;
      joy.y1 = joy.y;
      joy.ang = 0;
      joy.dist = 0;
    },
    move: function (e) {
      if (joy.stick) {
        if (e.clientX) {
          joy.x1 = e.clientX;
          joy.y1 = e.clientY;
        } else {
          joy.x1 = e.touches[0].clientX;
          joy.y1 = e.touches[0].clientY;
        }
        joy.ang = atan(joy.x, joy.y, joy.x1, joy.y1);
        joy.dist = Math.sqrt((joy.x - joy.x1) ** 2 + (joy.y - joy.y1) ** 2);
        if (joy.dist > joy.maxR) {
          joy.dist = joy.maxR;
        }
      }
    },
    kill: function () {
      joy.stick = false;
      joy.dist = 0;
      //alert(this.ang)
    }
  };

  //window.onresize = init;

  cnv.addEventListener("touchstart", joy.fix);
  cnv.addEventListener("touchmove", joy.move);
  cnv.addEventListener("touchend", joy.kill);
  cnv.addEventListener("mousedown", joy.fix);
  cnv.addEventListener("mousemove", joy.move);
  cnv.addEventListener("mouseup", joy.kill);

  function Key(row, col) {
    this.row = row;
    this.col = col;
    this.draw = function () {
      ctx.drawImage(keycard, D * this.col, H - L + D * this.row, D, D);
    };
  }

  keys.push(new Key(11, 3));
  keys.push(new Key(0, 8));
  keys.push(new Key(7, 19));
  keys.push(new Key(17, 16));

  function Button(row, col) {
    this.row = row;
    this.col = col;
    this.draw = function () {
      ctx.drawImage(button, D * this.col, H - L + D * this.row, D, D);
    };
  }

  buttons.push(new Button(19, 7));
  buttons.push(new Button(1, 0));
  buttons.push(new Button(0, 16));
  buttons.push(new Button(10, 19));

  var Player = {
    //p.y = 0.982
    //p.x = 0.032
    x: D + D / 4,
    w: D / 2,
    h: D / 2,
    y: L - D + D / 4,
    dx: 0,
    dy: 0,
    draw: function () {
      //ctx.fillStyle = "red";
      ctx.drawImage(avater, this.x, H - L + this.y, this.w, this.h);
    },
    move: function () {
      this.dx = (this.w / 10) * (joy.dist / joy.maxR) * cos(joy.ang);
      this.dy = (this.h / 10) * (joy.dist / joy.maxR) * sin(joy.ang);

      if (this.dx > 0) {
        for (let b of barriers) {
          if (
            this.x + this.w + this.dx >= b.x &&
            this.x + this.dx < b.x &&
            this.y < b.y + b.h &&
            this.y + this.h > b.y
          ) {
            this.dx = b.x - this.x - this.w;
          }
        }
      } else if (this.dx < 0) {
        for (let b of barriers) {
          if (
            this.x + this.dx <= b.x + b.w &&
            this.x + this.w + this.dx > b.x + b.w &&
            this.y < b.y + b.h &&
            this.y + this.h > b.y
          ) {
            this.dx = b.x + b.w - this.x;
          }
        }
      }

      /*if(this.dy===0){
                this.dy = this.h/50;
            }*/

      if (this.dy > 0) {
        for (let b of barriers) {
          if (
            this.y + this.dy + this.h >= b.y &&
            this.y + this.dy < b.y &&
            this.x < b.x + b.w &&
            this.x + this.w > b.x
          ) {
            this.dy = b.y - this.y - this.h;
          }
        }
      } else if (this.dy < 0) {
        for (let b of barriers) {
          if (
            this.y + this.dy <= b.y + b.h &&
            this.y + this.h + this.dy > b.y + b.h &&
            this.x < b.x + b.w &&
            this.x + this.w > b.x
          ) {
            this.dy = b.y + b.h - this.y;
          }
        }
      }

      this.x += this.dx;
      this.y += this.dy;
      tx = (W - this.w) / 2 - this.x;
      if (tx > 0) tx = 0;
      if (tx < W - L) tx = W - L;
      ty = L - this.y - this.h / 2 - H / 2;
      if (ty < 0) ty = 0;
      else if (ty > L - H) ty = L - H;
      // console.log(this.x)
    },
    check: function () {
      let c = floor((this.x + this.w / 2) / D);
      let r = floor((this.y + this.h / 2) / D);
      if (c == keys[0].col && r == keys[0].row) inv.key1 = true;
      else if (c == keys[1].col && r == keys[1].row) inv.key2 = true;
      else if (c == keys[2].col && r == keys[2].row) inv.key3 = true;
      else if (c == keys[3].col && r == keys[3].row) inv.key4 = true;

      if (c == buttons[0].col && r == buttons[0].row) inv.light1 = true;
      else if (c == buttons[1].col && r == buttons[1].row) inv.light2 = true;
      else if (c == buttons[2].col && r == buttons[2].row) inv.light3 = true;
      else if (c == buttons[3].col && r == buttons[3].row) inv.light4 = true;
      if (
        inv.key1 &&
        inv.key2 &&
        inv.key3 &&
        inv.key4 &&
        barriers.length == 186
      ) {
        barriers.splice(95, 1);
      }
      if (r == 10 && c == 9) {
        victory = true;
        B = new Date().getTime();
        joy.kill();
      }
    }
  };
  var tx = 0,
    ty = 0;
  // ctx.save();
  function animate() {
    ctx.save();
    ctx.clearRect(0, 0, W, H);

    ctx.translate(tx, ty);
    let grd = ctx.createRadialGradient(
      Player.x + Player.w / 2,
      H - L + Player.y + Player.h / 2,
      0,
      Player.x + Player.w / 2,
      H - L + Player.y + Player.h / 2,
      D * 3
    );
    grd.addColorStop(1, "transparent");
    grd.addColorStop(0, "grey");
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(
      Player.x + Player.w / 2,
      H - L + Player.y + Player.h / 2,
      D * 1.5,
      0,
      PI * 2
    );
    ctx.fill();

    ctx.fillStyle = "dimgrey";
    if (inv.light1) {
      ctx.fillRect(0, H - L / 2, L / 2, L / 2);
    }
    if (inv.light2) {
      ctx.fillRect(0, H - L, L / 2, L / 2);
    }
    if (inv.light3) {
      ctx.fillRect(L / 2, H - L, L / 2, L / 2);
    }
    if (inv.light4) {
      ctx.fillRect(L / 2, H - L / 2, L / 2, L / 2);
    }
    if (!inv.light1) {
      buttons[0].draw();
    }
    if (!inv.light2) {
      buttons[1].draw();
    }
    if (!inv.light3) {
      buttons[2].draw();
    }
    if (!inv.light4) {
      buttons[3].draw();
    }

    if (!inv.key1) keys[0].draw();
    if (!inv.key2) keys[1].draw();
    if (!inv.key3) keys[2].draw();
    if (!inv.key4) keys[3].draw();

    Player.move();
    Player.draw();
    Player.check();

    kc.textContent =
      "Keys: " +
      ((inv.key1 ? 1 : 0) +
        (inv.key2 ? 1 : 0) +
        (inv.key3 ? 1 : 0) +
        (inv.key4 ? 1 : 0)) +
      "/4";
    for (let b = 0; b < barriers.length - 4; b++) {
      //ctx.fillStyle = "#321";
      ctx.drawImage(
        wall,
        barriers[b].x,
        H - L + barriers[b].y,
        barriers[b].w,
        barriers[b].h
      );
    }

    ctx.shadowColor = "blue";
    ctx.fillStyle = "skyblue";
    ctx.fillRect(
      (D * map.length) / 2 - D,
      H - L + (D * map.length) / 2 - D,
      D * 2,
      D * 2
    );
    ctx.shadowColor = "transparent";

    ctx.restore();
    //ctx.translate(-tx,-ty);

    if (joy.stick) {
      joy.draw();
      //console.log("y")
    }
    if (!victory) window.requestAnimationFrame(animate);
    else
      setTimeout(function () {
        let dt = (B - A) / 1000;
        time.textContent = `${floor(dt / 60)}M:${round(dt % 60)}S`;
        finished.style.display = "flex";
      }, 200);
  }

  window.onresize = function () {
    joy.kill();
    let pL = L;
    for (let b of barriers) {
      b.x /= L;
      b.y /= L;
      b.w /= L;
      b.h /= L;
    }
    init();
    Player.x *= L / pL;
    Player.y *= L / pL;
    Player.w *= L / pL;
    Player.h *= L / pL;
  };

  animate();
  //console.log(barriers.length);
};

    
