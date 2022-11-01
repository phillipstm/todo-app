import { createStyles, Header, Navbar, Text } from '@mantine/core';

const useStyles = createStyles((theme) =>({
    navbar: {
        backgroundColor: theme.colors.blue[6],
        padding: theme.spacing.md,
        fontSize: theme.colors.gray[0],
    },
    hi: {
        backgroundColor: theme.colors.gray[8],
        color: theme.colors.gray[0],
        width: '80%',
        margin: 'auto',
        fontSize: theme.spacing.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
}))

const AppHeader = ({ incomplete }) => {
    const { classes } = useStyles();
    
    return (
        <Header data-testid="todo-header">
            <Navbar className={classes.navbar}>
                <Text>Home</Text>
            </Navbar>
            <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
        </Header>
    )
}

export default AppHeader