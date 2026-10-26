from django.contrib import admin
from .models import Department


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact_email', 'contact_phone', 'is_active')
    search_fields = ('name',)
    list_filter = ('is_active',)
