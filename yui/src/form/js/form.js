// eslint-disable-next-line camelcase
M.availability_weekday = M.availability_weekday || {};

M.availability_weekday.form = Y.Object(M.core_availability.plugin);

M.availability_weekday.form.initInner = function(param) {
    this.params = param;
};

M.availability_weekday.form.getNode = function(json) {
    var node = Y.Node.create('<span>' + this.params + '</span>');

    var days = json.days || [];

    days.forEach(
        function(d) {
            node.one('option[value=' + d + ']').set('selected', true);
        }
    );

    if (!M.availability_weekday.form.addedEvents) {
        M.availability_weekday.form.addedEvents = true;
        var root = Y.one('#fitem_id_availabilityconditionsjson');
        root.delegate('click', function() {
            M.core_availability.form.update();
        }, '.availability_weekday select');
    }

    return node;
};

M.availability_weekday.form.fillValue = function(value, node) {
    var daysSelect = node.one('select[name=availability_weekday_days]');
    var options = daysSelect.get('options').get('_nodes');
    var days = [];
    options.forEach(function(o) {
        if (o.get('selected')) {
            days.push(o.get('value'));
        }
    });
    value.days = days;
};
