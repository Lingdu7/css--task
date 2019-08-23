/**
 * 
 * @param {string} name 角色名称
 * @param {number} hp 血槽
 * @param {number} attack 攻击
 * @param {number} crit 暴击 百分比
 * @param {number} broken 破甲 百分比
 * @param {number} def 防御
 */
function Urse(name, hp, attack, crit, broken, def) {
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.crit = crit;
	this.def = def;
	this.broken = broken;
	/**
	 * 查看玩家信息
	 */
	this.info = function () {
		console.log(`角色：${name}\n血量：${hp}\n攻击：${attack}\n暴击：${crit}\n破甲：${broken}\n防御：${def}\n`);
		console.log("======================================");
	}

	/**
	 * 发起进攻
	 * @param {*} urs 被攻击对象
	 */
	this.hit = function (urs) {
		var cr = ""
		var c = this.attack;
		if (Math.random() < this.crit) {
			c *= 2;
			cr = "出现暴击"
		}
		var i = Math.round(c - (urs.def * (1 - this.broken)))
		if (i < 0) {
			i = 1;
		}
		urs.hp - i > 0 ? urs.hp -= i : urs.hp = 0
		$("#bb").append(`<p class="aq">${this.name}攻击${urs.name}</p><p class="aqq">本次${cr}伤害：${i} ${urs.name}剩余血量：${urs.hp} </p>`)

		if (urs.hp === 0) {
			$("#bb").append(`<span>* * * * * * * * 恭喜${this.name}胜利 * * * * * * * * </span>`)
		}
	}
}


var u1;
var u2;
$("#kaishi").click(function () {
	$("#bb,#aa1,#aa2").empty()
	u1 = new Urse("亚瑟", 1000, 90, 0.1, 0.2,120);
	u2 = new Urse("后裔", 500, 200, 0.4, 0.3, 30);
	$("#aa1").append(`<p class="aq1">角色：${u1.name}</p><p class="aqq2">血量：${u1.hp} 攻击：${u1.attack} 暴击：${u1.crit} 破甲：${u1.broken} 防御：${u1.def}</p>`)
	$("#aa2").append(`<p class="aq1">角色：${u2.name}</p><p class="aqq2">血量：${u2.hp} 攻击：${u2.attack} 暴击：${u2.crit} 破甲：${u2.broken} 防御：${u2.def}</p>`)

})
var o = 1;
var b = 2;

$("#sha1").click(function () {
	if (u1) {
		if (b % 2 === 0) {
			$("#bb").append(`<span>* * * * * * * *  第${o}轮  * * * * * * * * </span>`)
			o++
		}
		b++
		u1.hit(u2)
	}

})
$("#sha2").click(function () {
	if (u1) {
		if (b % 2 === 0) {
			$("#bb").append(`<span>* * * * * * * *  第${o}轮  * * * * * * * * </span>`)
			o++
		}
		b++
		u2.hit(u1)
	}
})

$("#zdsha").click(function () {
	if (u1) {
		for (var i = 0; ;) {
			if (u1.hp === 0) {
				break;
			}
			if (u2.hp === 0) {
				break;
			}
			if (Math.random() < 0.5) {
				if (b % 2 === 0) {
					$("#bb").append(`<span>* * * * * * * *  第${o}轮  * * * * * * * * </span>`)
					o++
				}
				b++
				u1.hit(u2)
			}
			else {
				if (b % 2 === 0) {
					$("#bb").append(`<span>* * * * * * * *  第${o}轮  * * * * * * * * </>`)
					o++
				}
				b++
				u2.hit(u1)
			}
		}
	}
})