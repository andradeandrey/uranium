// Tabs
interactions.tabs = function( fragment ) {
  var groups = findElements(fragment, "tabs", function(set, comp) {
    var tabId = $(comp).attr("data-ur-tab-id");
    set.tabs = set.tabs || {};
    set.tabs[tabId] = set.tabs[tabId] || {};
    var compName = $(comp).attr("data-ur-tabs-component");
    set.tabs[tabId][compName] = set.tabs[tabId][compName] || [];
    set.tabs[tabId][compName].push(comp);
  });

  $.each(groups, function(id, group) {
    group["closeable"] = $(group["set"]).attr("data-ur-closeable") == "true";

    // Set the state of the tabs
    $.each(group["tabs"], function() {
      var tabState = $(this["button"]).attr("data-ur-state") || "disabled";
      $(this["button"]).add(this["content"]).attr("data-ur-state", tabState);
    });

    // Set up the button call backs
    $.each(group["tabs"], function(_, tab) {
      $(tab["button"]).on("click.ur.tabs", function() {
        // Is the tab open already?
        var open = $(this).attr("data-ur-state") == "enabled";
        $.each(group["tabs"], function() {
          $(this["button"]).add(this["content"]).attr("data-ur-state", "disabled");
        });
        // If closeable (active tab can be toggled) then make sure it happens.
        if (!open || !group["closeable"]) {
          $(tab["button"]).add(tab["content"]).attr("data-ur-state", "enabled");
        }
      });
    });

    $(group["set"]).data("urInit", true);
  });
};
