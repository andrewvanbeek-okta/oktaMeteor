Template.configureLoginServiceDialogForOkta.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForOkta.fields = function () {
  return [
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'},
    {property: 'oktaauthorizeurl', label: 'Okta Authorize Url'},
    {property: 'redirecturi', label: 'Redirect Uri'}
  ];
};
