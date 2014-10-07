$(function() {
    $("#draggable").draggable({
        containment: "#contain",
        scroll: false,
        drag: function() {
            var $this = $(this);
            var thisPos = $this.position();
            var parentPos = $this.parent().position();

            var x = thisPos.left - parentPos.left;
            var y = thisPos.top - parentPos.top;

            $this.text(x + ", " + y);
        }
    });
});