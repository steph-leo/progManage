# class CampusLocation(models.Model):
    name = models.CharField(max_length=100)
    building_name = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    location_type = models.CharField(max_length=50)
    description = models.TextField()

class ClassRoom(models.Model):
    location = models.ForeignKey(CampusLocation, on_delete=models.CASCADE)
    room_number = models.CharField(max_length=20)
    capacity = models.IntegerField()
    floor = models.IntegerField()