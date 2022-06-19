
/*let nowIndex = 1;
const imageSlider = document.querySelector('#imageSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);


function moveA()
{
    imageSlider.style.transfome = 'translate(0px)';
    nowIndex =1;
}

function moveB()
{
    imageSlider.style.transfome = 'translate(-860px)';
    nowIndex =2;
}



function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
        
    }
    else
    {
        nowIndex --;
    }
    moveSlider(nowIndex);
}

function moveRight()
{
    if(nowIndex == 2)
    {
        nowIndex =2;
    }
    else
    {
        nowIndex ++;
    }
    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
    }
}
*/




let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);


leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveright);

/**
 *  첫번째 이미지로 이동
 */
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}

/**
 *  두번째 이미지로 이동
 */
function moveB()
{
    imageSlider.style.transform = 'translate(-860px)';
    nowIndex =2;
}




function moveLeft()
{
    if(nowIndex ==1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}

function moveright()
{
    if(nowIndex == 2)
    {
        nowIndex =2;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA()
        break;
        case 2:
            moveB()
        break;

    }
}