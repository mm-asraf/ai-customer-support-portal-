import DashboardIcon from '@mui/icons-material/Dashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssistantIcon from '@mui/icons-material/Assistant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const sideBarData = [
    {
        title:'Dashboard',
        icon: <DashboardIcon />,
        link:'/'
    },
    {
        title:'Queries Feed',
        icon:<QueryStatsIcon />,
        link:'/query-feed'
    },
    {
        title:'AI Response Analytics',
        icon:<AssistantIcon />,
        link:'/ai-response'
    },
    {
        title:'Feedback',
        icon:<FeedbackIcon />,
        link:'/feedback'
    },
    {
        title:'Admin Settings',
        icon:<AdminPanelSettingsIcon />,
        link:'/admin-settings'
    },
]