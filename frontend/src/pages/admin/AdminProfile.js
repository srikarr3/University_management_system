
import { useSelector } from 'react-redux';

const AdminProfile = () => { 
        const { currentUser }  = useSelector((state) => state.user);
    return (
        <div>
            Name: {currentUser.name}
            <br />
            Email: {currentUser.email}
            <br />
            School: {currentUser.schoolName}
            <br />
            {/* <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button> */}
            {/* <Button variant="contained" sx={styles.showButton}
                
                </div>
            </Collapse> */}
        </div>
    )
}

export default AdminProfile
