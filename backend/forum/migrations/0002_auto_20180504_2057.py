# Generated by Django 2.0.3 on 2018-05-04 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reply',
            old_name='uid',
            new_name='user_id',
        ),
        migrations.RenameField(
            model_name='section',
            old_name='root_section',
            new_name='father_section',
        ),
        migrations.RemoveField(
            model_name='reply',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='section',
            name='title',
        ),
        migrations.RemoveField(
            model_name='section',
            name='valid',
        ),
        migrations.AddField(
            model_name='section',
            name='name',
            field=models.CharField(default='default-section', max_length=50),
        ),
    ]