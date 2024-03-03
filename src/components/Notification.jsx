import {Alert} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../store/ui-slice";

export const Notification = (props) => {
    const { color = "info", message = "No message" } = props;
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);

    const handleClose = () =>  {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }

    return (
        notification.open && <Alert severity={color} onClose={handleClose}>{message}</Alert>
    )
}
