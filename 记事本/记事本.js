

//封装函数获取页面有多少条数据
function fn() {
    let num = document.querySelectorAll(".content li").length
    if (num == 0) {
        document.querySelector(".num").innerHTML = '无'
    } else {
        document.querySelector(".num").innerHTML = num
    }
}





//添加
//获取添加按钮
const addButton = document.querySelector(".add button");
//获取ul
const ul = document.querySelector(".content");
//保存页面所有数据
let list = []
function add() {
    //获取文本框内容
    const text = document.querySelector(".add input").value.trim();
    if (text == '') {
        alert('不能为空')
    } else if (list.some(item => item.text == text)) {
        //判重
        alert('不能重复添加')
    } else {
        list.push({ text, flag: false })
        //让页面为空 重新渲染
        ul.innerHTML = ''
        //创建li元素
        list.forEach(item => {
            ul.innerHTML += ` <li>
          <span><input onchange="changes()" type="checkbox" /> ${item.text}</span>
          <font>x</font>
      </li>`
        });
    }
    // 清楚文本框内容
    document.querySelector(".add input").value = ''
    fn()
}

//input选中行添加样式
function changes() {
    //获取input
    const inputs = document.querySelectorAll(".content input");
    //获取所有行
    const lis = document.querySelectorAll('.content li');
    //循环inputs  .checked为true的就是选中的input
    inputs.forEach((item, i) => {
        list[i].flag = item.checked;
        if (item.checked) {
            lis[i].style.background = '#ed7b52';
            lis[i].style.color = '#fff';
            lis[i].children[1].innerHTML = '-'
            lis[i].children[0].style.textDecoration = 'line-through'
        } else {
            lis[i].style.background = '#fff';
            lis[i].style.color = '#000';
            lis[i].children[1].innerHTML = 'x'
            lis[i].children[0].style.textDecoration = ''
        }
    })
    console.log(list);
}


//查看所有
function whole() {
    ul.innerHTML = ''
    //创建li元素
    list.forEach(item => {
        if (item.flag) {
            ul.innerHTML += ` <li  style="background-color: #ed7b52;color: #fff;">
        <span><input checked onchange="changes()" type="checkbox" /> <s>${item.text}</s></span>
        <font>-</font>
    </li>`
        } else {
            ul.innerHTML += ` <li  style="background-color: #fff;color: #000;">
        <span><input onchange="changes()" type="checkbox" /> ${item.text}</span>
        <font>x</font>
    </li>`
        }
    });
    fn()
}

//查看待完成
function Ongoing() {
    ul.innerHTML = ''
    //创建li元素
    list.forEach(item => {
        if (item.flag == false) {
            ul.innerHTML += ` <li  style="background-color: #fff;color: #000;">
        <span><input onchange="changes()" type="checkbox" /> ${item.text}</span>
        <font>x</font>
    </li>`
        }
    })
    fn()
}
//查看已完成
function Completed() {
    ul.innerHTML = ''
    //创建li元素
    list.forEach(item => {
        if (item.flag == true) {
            ul.innerHTML += ` <li  style="background-color: #ed7b52;color: #fff;">
        <span><input checked onchange="changes()" type="checkbox" /> <s>${item.text}</s></span>
        <font>-</font>
    </li>`
        }
    })
    fn()
}
//清楚所有
function clears() {
    document.querySelector('.content').innerHTML = ''
    list = []
    fn()
}