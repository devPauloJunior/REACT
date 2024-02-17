import axios from "axios";

export const ApiService = axios.create({
  baseURL: 'http://25.0.155.100:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export function getgerente() {
  return ApiService.get('/Gerente/')
    .then(res => {
      return res.data
    })
}

export function getcolaboradores() {
  return ApiService.get('/Colaborador/')
    .then(res => {
      return res.data
    })
}

export function getschedule() {
  return ApiService.get('/schedule/')
    .then(res => {
      return res.data
    })
}

export function addschedule(schedule) {
  return ApiService.post('/schedule/', {
    'schedule_id': null,
    'schedule_manager_id': schedule.schedule_manager_id.value,
    'schedule_collaborator_id': schedule.schedule_collaborator_id.value,
    'schedule_name_manager': schedule.schedule_name_manager.value,
    'schedule_name_collaborator': schedule.schedule_name_collaborator.value,
    'schedule_topic': schedule.schedule_topic.value,
    'schedule_date': schedule.schedule_date.value,
    'schedule_hour': schedule.schedule_hour.value,
    'schedule_meet_location': schedule.schedule_meet_location.value,
    'schedule_description': schedule.schedule_description.value,
    'schedule_duration': schedule.schedule_duration.value,
    'schedule_status_manager': schedule.schedule_status_manager.value,
    'schedule_status_collaborator': schedule.schedule_status_collaborator.value,
  })
    .then(res => {
      return res.data
    })
}

export function editschedule(schedule_id, schedule) {
  return ApiService.put('/schedule/' + schedule_id + '/',
    {
      'schedule_manager_id': schedule.schedule_manager_id.value,
      'schedule_collaborator_id': schedule.schedule_collaborator_id.value,
      'schedule_name_manager': schedule.schedule_name_manager.value,
      'schedule_name_collaborator': schedule.schedule_name_collaborator.value,
      'schedule_topic': schedule.schedule_topic.value,
      'schedule_date': schedule.schedule_date.value,
      'schedule_hour': schedule.schedule_hour.value,
      'schedule_meet_location': schedule.schedule_meet_location.value,
      'schedule_description': schedule.schedule_description.value,
      'schedule_duration': schedule.schedule_duration.value,
      'schedule_status': schedule.schedule_status.value,
    })
    .then(res => {
      return res.data
    })
}

export function deleteschedule(schedule_id) {
  return ApiService.delete('/schedule/' + schedule_id + '/')
    .then(res => {
      return res.data
    })
}

export function getfeedback() {
  return ApiService.get('/feedback/')
    .then(res => {
      return res.data
    })
}

export function addfeedback(feedback) {
  return ApiService.post('/feedback/', {
    'feedback_id': null,
    'feedback_manage': feedback.feedback_manage.value,
    'feedback_collaborator': feedback.feedback_collaborator.value,
    'feedback_title': feedback.feedback_title.value,
    'feedback_date': feedback.feedback_date.value,
    'feedback_hour': feedback.feedback_hour.value,
    'feedback_note': feedback.feedback_note.value,
    'feedback_evaluate': feedback.feedback_evaluate.value,
    'feedback_idschedule': feedback.feedback_idschedule.value,
    'feedback_manager_id': feedback.feedback_manager_id.value,
    'feedback_collaborator_id': feedback.feedback_collaborator_id.value,
  })
    .then(res => {
      return res.data
    })
}

export function editfeedback(feedback_iduser, feedback) {
  return ApiService.put('/feedback/' + feedback_iduser + '/',
    {
      'feedback_manage': feedback.feedback_manage.value,
      'feedback_collaborator': feedback.feedback_collaborator.value,
      'feedback_title': feedback.feedback_title.value,
      'feedback_date': feedback.feedback_date.value,
      'feedback_hour': feedback.feedback_hour.value,
      'feedback_note': feedback.feedback_note.value,
      'feedback_evaluate': feedback.feedback_evaluate.value,
      'feedback_idschedule': feedback.feedback_idschedule.value,
      'feedback_manager_id': feedback.feedback_manager_id.value,
      'feedback_collaborator_id': feedback.feedback_collaborator_id.value,
    })
    .then(res => {
      return res.data
    })
}

export function deletefeedback(feedback_iduser) {
  return ApiService.delete('/feedback/' + feedback_iduser + '/')
    .then(res => {
      return res.data
    })
}

export function getpdi() {
  return ApiService.get('/pdi/')
    .then(res => {
      return res.data
    })
}

export function addpdi(pdi) {
  return ApiService.post('/pdi/', {
    'planning_id': null,
    'planning_manager_id': pdi.planning_manager_id.value,
    'planning_collaborator_id': pdi.planning_collaborator_id.value,
    'planning_title': pdi.planning_title.value,
    'planning_goals': pdi.planning_goals.value,
    // 'planning_status': pdi.planning_status.value,
    'planning_progess': pdi.planning_progess.value,
    'planning_description': pdi.planning_description.value,
    'planning_resource': pdi.planning_resource.value,
    'planning_name_manager': pdi.planning_name_manager.value,
    'planning_name_collaborator': pdi.planning_name_collaborator.value,
    // 'planning_date': pdi.planning_date.value,
    // 'planning_hour': pdi.planning_hour.value,
    'planning_final_date': pdi.planning_final_date.value,
    'planning_final_hour': pdi.planning_final_hour.value,
  })
    .then(res => {
      return res.data
    })
}

export function editpdi(planning_id, pdi) {
  return ApiService.put('/pdi/' + planning_id + '/',
    {
    'planning_manager_id': pdi.planning_manager_id.value,
    'planning_collaborator_id': pdi.planning_collaborator_id.value,
    'planning_title': pdi.planning_title.value,
    'planning_goals': pdi.planning_goals.value,
    'planning_status': pdi.planning_status.value,
    'planning_progess': pdi.planning_progess.value,
    'planning_description': pdi.planning_description.value,
    'planning_resource': pdi.planning_resource.value,
    'planning_name_manager': pdi.planning_name_manager.value,
    'planning_name_collaborator': pdi.planning_name_collaborator.value,
    // 'planning_date': pdi.planning_date.value,
    // 'planning_hour': pdi.planning_hour.value,
    'planning_final_date': pdi.planning_final_date.value,
    'planning_final_hour': pdi.planning_final_hour.value,
    })
    .then(res => {
      return res.data
    })
}

export function deletepdi(planning_id) {
  return ApiService.delete('/pdi/' + planning_id + '/')
    .then(res => {
      return res.data
    })
}

