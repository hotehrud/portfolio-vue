import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/views/Profile'
import Resume from '@/views/Resume'
import Achievement from '@/views/Achievement'
import Project from '@/views/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/project',
      name: 'Projects',
      component: Project
    }
  ]
})
