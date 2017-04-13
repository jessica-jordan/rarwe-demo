import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  songs:        DS.hasMany('song'),
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  })
});
