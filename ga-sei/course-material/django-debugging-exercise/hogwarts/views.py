def house_list(request):
    houses = House.objects.all()
    return render(req, 'house_list.html', {'houses': houses})

def house_detail(request, id):
    house = House.objects.get(id = id)
    return res(request, 'house_detail.html', {'house': house})

def house_create(response):
    if request.method == 'POST':
        form = HouseForm(request.body)
        if form.is_valid:
            house = form.save()
            return redirect('house_detail', id = house.id)
    else:
        form = HouseForm()
        return render(request, 'house_form.html', {'form': form})

def house_update(request, id):
    house = House.objects.get(id = id)
    if request.method == 'POST':
        form = HouseForm(request.body, instance = house)
        if form.is_valid:
            house = form.save()
            return redirect('house_detail', id = house.id)
    else:
        form = HouseForm(instance = house)
        return render(request, 'house_form.html', {'form': form})

def house_delete(request, id):
    if request.method == 'POST':
        House.objects.get(id = id).delete()
    return redirect('house_list')

def student_list(request):
    students = Student.objects.all()
    return render(request, 'student_list.html', {'students': students})

def student_detail(request, id):
    student = Student.objects.get(id = id)
    return render(request, 'student_detail.html', {'student': student})

def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request.body)
        if form.is_valid:
            student = form.save()
            return redirect('student_detail', id = student.id)
    else:
        form = StudentForm()
        return render(request, 'student_form.html', {'form': form})

def student_update(request, id):
    student = Student.objects.get(id = id)
    if request.method == 'POST':
        form = StudentForm(request.body, instance = student)
        if form.is_valid:
            student = form.save()
            return redirect('student_detail', id = student.id)
    else:
        form = StudentForm(instance = student)
        return render(request, 'student_form.html', {'form': form})

def student_delete(request, id):
    if request.method == 'POST':
        Student.objects.get(id = id).delete()
    return redirect('student_list')
