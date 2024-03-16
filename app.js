let currentAccordionItem;
document.querySelector('.faq_accordion').addEventListener ('click', handleAccordionClick);

function handleAccordionClick (e)
{
    const accordionItem = e.target.closest ('.faq_accordion_item');

    if (currentAccordionItem)
        currentAccordionItem.classList.remove ('selected');
    
    if (accordionItem === currentAccordionItem)
    {
        currentAccordionItem = null;
        return;
    }

    accordionItem.classList.add ('selected');
    currentAccordionItem = accordionItem;

}