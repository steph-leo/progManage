# from django.db import models

# # Create your models here.
class ClassSchedule(models.Model):
    course_code = models.CharField(max_length=20)
    classroom = models.ForeignKey('locations.ClassRoom', on_delete=models.CASCADE)
    lecturer = models.ForeignKey(
        'accounts.User',
        limit_choices_to={'user_type': 'staff'},
        on_delete=models.CASCADE
    )
    start_time = models.TimeField()
    end_time = models.TimeField()
    day_of_week = models.IntegerField()