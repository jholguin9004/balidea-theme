/**
 * Adds single button to body.
 *
 * @type {Drupal~behavior}
 */
(function ($, Drupal, once, drupalSettings) {
    Drupal.behaviors.balideaButton = {
        attach(context) {
            once('balidea_button', 'body', context).forEach(function () {
                var title, button;
                button = document.createElement('button');
                button.className = "balidea-button";
                button.type = 'button';
                button.innerText = Drupal.t('Click me!');
                button.addEventListener('click', event => {
                    alert(drupalSettings.sitename);
                });
                $(context).find('body').append(button);
            });
        }
    };
}(jQuery, Drupal, once, drupalSettings));