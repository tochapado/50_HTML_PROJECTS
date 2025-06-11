const panels = document.querySelectorAll('.panel');

for(let i = 0; i < panels.length; i++)
{
    const panel = panels[i];
    panel.addEventListener('click', function()
    {
        removeActiveClasses();
        panel.classList.add('active');
    });
};

function removeActiveClasses()
{
    for(let i = 0; i < panels.length; i++)
    {
        panels[i].classList.remove('active');
    };
};