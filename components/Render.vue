<script>
export default {
    name: 'Render',
    functional: true,
    render(createElement, context) {
        return context.props.content;
    },
};
</script>
